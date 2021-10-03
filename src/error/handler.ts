import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import { ApiError } from './ApiError';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    if (error.message instanceof ValidationError) {
      const parsedErrors = error.message.inner.reduce(
        (ac, err) => ({ ...ac, [err.path || '']: err.message }),
        {},
      );
      return res
        .status(error.code)
        .json({ message: 'Validation error', error: parsedErrors });
    }
  }
  console.log(error);
  return res.json({ message: 'Internal server error' });
};
