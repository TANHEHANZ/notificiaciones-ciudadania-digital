import {
  AppError,
  NotFoundError,
  ValidationError,
} from "@/infraestructure/utils/helpers/errors";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

interface ConfigAxiosOptions {
  baseURL: string;
  token?: string;
  authType?: "Bearer" | "Basic" | "Token" | "Custom";
  customAuthHeader?: string;
  timeout?: number;
}

export const createApiInstance = (
  options: ConfigAxiosOptions
): AxiosInstance => {
  const api = axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout || 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use((config) => {
    if (options.token) {
      if (options.customAuthHeader) {
        config.headers[options.customAuthHeader] = options.token;
      } else {
        const prefix =
          options.authType === "Bearer"
            ? "Bearer "
            : options.authType === "Basic"
            ? "Basic "
            : options.authType === "Token"
            ? ""
            : "";
        config.headers.Authorization = `${prefix}${options.token}`;
      }
    }
    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError): Promise<never> => {
      if (error.response) {
        console.log(error.response.data);
        const status = error.response.status;
        const data = error.response.data;

        switch (status) {
          case 400:
            throw new ValidationError("Error en la API", data);
          case 404:
            throw new NotFoundError("Recurso no encontrado", data);
          default:
            throw new AppError("Error en el servicio externo", status, data);
        }
      } else if (error.request) {
        throw new AppError("Sin respuesta del servidor", 503);
      } else {
        throw new AppError(
          error.message || "Error interno de configuración",
          500
        );
      }
    }
  );

  return api;
};
