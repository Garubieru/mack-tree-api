import { BmwKeys } from '@enums/BmwKeys';
import { Operators } from '@enums/Operators';
import * as Yup from 'yup';

export const bmwGetSchema = Yup.object({
  query: Yup.object({
    price: Yup.number()
      .moreThan(1, 'Price must be more than 1.')
      .typeError('Type a valid number.')
      .required(),
    operator: Yup.string()
      .oneOf(Object.values(Operators), 'Invalid operator. Try: <=, <, ===, >, >=')
      .required(),
    key: Yup.string().oneOf(Object.values(BmwKeys)).required(),
  }),
});
