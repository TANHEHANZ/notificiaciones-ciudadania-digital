import { Response } from "express";
import {
  ApiResponse,
  ApiError,
  PaginatedApiResponse,
  PaginatedData,
} from "@infraestructure/types/ApiResponse";
import { HTTP_STATUS } from "@infraestructure/types/http";

export const API = {
  success: <T>(
    res: Response,
    message: string,
    data?: T,
    code = HTTP_STATUS.OK
  ): Response<ApiResponse<T>> => {
    return res.status(code).json({
      code,
      message,
      data,
    });
  },
  badRequest: (
    res: Response,
    message: string,
    errors?: ApiError[],
    code = HTTP_STATUS.BAD_REQUEST
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },
  validationError: (
    res: Response,
    message: string,
    errors: ApiError[],
    code = HTTP_STATUS.VALIDATE
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },
  unauthorized: (
    res: Response,
    message: string,
    errors?: ApiError[],
    code = HTTP_STATUS.UNAUTHORIZED
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },

  forbidden: (
    res: Response,
    message: string,
    errors?: ApiError[],
    code = HTTP_STATUS.FORBIDDEN
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },

  notFound: (
    res: Response,
    message: string,
    errors?: ApiError[],
    code = HTTP_STATUS.NOT_FOUND
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },
  serverError: (
    res: Response,
    message?: string | "Error en el servidor",
    errors?: ApiError[],
    code = HTTP_STATUS.INTERNAL_SERVER
  ): Response<ApiResponse<null>> => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  },
  paginated: <T>(
    res: Response,
    message: string,
    items: T[],
    total: number,
    page: number,
    limit: number,
    code = HTTP_STATUS.OK
  ): Response<PaginatedApiResponse<T>> => {
    const totalPages = Math.ceil(total / limit);

    const paginatedData: PaginatedData<T> = {
      items,
      total,
      page,
      limit,
      totalPages,
    };

    return res.status(code).json({
      code,
      message,
      data: paginatedData,
    });
  },
};
