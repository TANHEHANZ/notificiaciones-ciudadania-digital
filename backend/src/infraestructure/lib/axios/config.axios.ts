import { AppError } from "@/infraestructure/helpers/errors";
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

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

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
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
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (!error.response) {
        throw new AppError(
          error.message || "Error interno de configuración",
          500
        );
      }
      const status = error.response.status;
      const message = (error.response.data as any)?.message || "Error de API";
      throw new AppError(message, status);
    }
  );

  return api;
};
