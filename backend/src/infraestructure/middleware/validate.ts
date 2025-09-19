import { ValidationError } from "@infraestructure/helpers/errors";
import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

export const validate =
  (schema: ZodType<any>, property: "body" | "params" | "query" = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[property]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationError(
          "Error de validación",
          error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          }))
        );
      }
      next(error);
    }
  };
