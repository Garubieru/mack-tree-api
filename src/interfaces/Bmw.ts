export type FuelType = 'Diesel' | 'Petrol' | 'Hybrid' | 'Other' | 'Electric';

export interface IBmw {
  model: string;
  year: number;
  price: number;
  transmission: string;
  mileage: number;
  fuelType: FuelType;
  tax: number;
  mpg: number;
  engineSize: number;
}
