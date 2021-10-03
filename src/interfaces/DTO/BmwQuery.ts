import { BmwKeys } from '@enums/BmwKeys';
import { Operators } from '@enums/Operators';

export interface BmwQueryRequest {
  price: number;
  operator: Operators;
  key: BmwKeys;
}
