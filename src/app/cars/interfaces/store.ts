import { ICar } from "./cars";

export interface ICarsState {
  count: number;
  car: ICar;
  cars: ICar[];
}
