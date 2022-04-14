import { ICar } from "src/app/cars/interfaces";

export interface IPageState {
  home: {
    topRatingCars: ICar[];
    latestCars: ICar[];
  }
}
