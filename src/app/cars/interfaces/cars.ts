import { IComment, IKMD } from "src/app/shared/interfaces";
import { IPicture } from "src/app/shared/interfaces/picture"

export interface ICar {
  _id: string,
  brand: string,
  model: string,
  year: string,
  rating: number,
  content: string,
  comments: IComment[],
  pawPrintPicture?: IPicture,
  _acl?: {
    creator: string
  },
  _kmd?: IKMD
}

export interface IAddCar {
  brand: string,
  model: string,
  year: string,
  rating: number,
  content: string,
  picture: File
}
