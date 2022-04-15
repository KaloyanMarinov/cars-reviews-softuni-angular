import { ICar } from "./cars";

export interface ICarsState {
  count: number;
  car: ICar;
  cars: ICar[];
  pagination: IPagination[]
}

export interface IPagination {
  page: number,
  cars: ICar[]
}
