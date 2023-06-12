export class ApiError extends Error {
  statusCode = 500;
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

export class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message) {
    super(message, 403);
  }
}
