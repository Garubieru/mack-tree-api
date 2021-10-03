import { AnySchema, ValidationError } from 'yup';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '@error/ApiError';
import { bmwGetSchema } from './validations/bmwGetValidations';

export const validateSchema =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(
        {
          query: req.query,
          body: req.body as unknown,
          params: req.params,
        },
        { abortEarly: false },
      );
      return next();
    } catch (e) {
      if (e instanceof ValidationError) return next(ApiError.validation(e));
      return res.send({ message: 'Internal server error' });
    }
  };
validateSchema(bmwGetSchema);
