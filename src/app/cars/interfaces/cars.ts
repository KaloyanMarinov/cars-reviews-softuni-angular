import { IComment } from "src/app/comments/interfaces";
import { IKMD } from "src/app/shared/interfaces";
import { IPicture } from "src/app/shared/interfaces/picture"

export interface ICar {
  _id: string,
  brand: string,
  model: string,
  year: string,
  rating: number,
  content: string,
  comments: IComment[],
  pawPrintPicture?: string,
  _acl?: {
    creator: string
  },
  _kmd?: IKMD
}

export interface IAddCar {
  brand: string,
  model: string,
  year: number,
  rating: number,
  content: string,
  pawPrintPicture: string
}

export interface IUploadImage {
  mimeType: string;
  size: number;
  _acl: {
    gr: true;
  };
  _filename: string;
  _public: true;
}

export interface IUploadImageSuccess {
  mimeType: string;
  size: number;
  _acl: {
    gr: boolean;
    creator: string;
  }
  _expiresAt: string;
  _filename: string;
  _id: string;
  _kmd: IKMD;
  _public: boolean
  _requiredHeaders: {};
  _uploadURL: string
}
