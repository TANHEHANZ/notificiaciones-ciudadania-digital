export class AppError extends Error {
  public status: number;
  public details?: any;

  constructor(message: string, status: number, details?: any) {
    super(message);
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Not Found", details?: any) {
    super(message, 404, details);
  }
}

export class ValidationError extends AppError {
  constructor(message = "Validation Error", details?: any) {
    super(message, 400, details);
  }
}

export class DatabaseError extends AppError {
  constructor(message = "Database Error", details?: any) {
    super(message, 500, details);
  }
}
