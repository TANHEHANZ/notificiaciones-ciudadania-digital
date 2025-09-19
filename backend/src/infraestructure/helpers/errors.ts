import { ApiError } from "@infraestructure/types/ApiResponse";
import { HTTP_STATUS } from "@infraestructure/types/http";

export class AppError extends Error {
  public statusCode: number;
  public errors?: ApiError[];

  constructor(message: string, statusCode: number = 500, errors?: ApiError[]) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, HTTP_STATUS.CONFLICT);
  }
}
export class ValidationError extends AppError {
  constructor(message: string, errors: ApiError[]) {
    super(message, HTTP_STATUS.VALIDATE, errors);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}
