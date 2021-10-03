import { ValidationError } from 'yup';

export class ApiError {
  constructor(public code: number, public message: any) {}

  static validation(e: ValidationError) {
    return new ApiError(400, e);
  }
}
