import { Request, Response, NextFunction } from "express";
import { API } from "@/infraestructure/config/response";
import {
  DatabaseError,
  NotFoundError,
  ValidationError,
} from "../utils/helpers/errors";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof NotFoundError) {
    API.notFound(res, err.message);
    return;
  }

  if (err instanceof ValidationError) {
    API.badRequest(res, err.message, err.details);
    return;
  }

  if (err instanceof DatabaseError) {
    API.serverError(res, err.message, err.details);
    return;
  }

  API.serverError(res, err.message || "Error interno del servidor");
  return;
};
