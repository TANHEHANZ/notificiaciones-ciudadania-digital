import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { ValidationError as SequelizeValidationError } from "sequelize";
import { AppError } from "./errors";
import { API } from "../config/response";

export const errorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      code: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
  }

  if (err instanceof SequelizeValidationError) {
    API.validationError(
      res,
      "Error de validación de datos",
      err.errors.map((e) => ({
        field: e.path ?? undefined,
        message: e.message,
      }))
    );
  }

  console.error(err);
  API.serverError(res, "Error interno del servidor");
};
