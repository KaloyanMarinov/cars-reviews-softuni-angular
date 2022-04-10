import { IKMD } from ".";

export interface IPicture {
  _id: string;
  _filename: string;
  _public: boolean;
  mimeType: string;
  _kmd: IKMD;
  _downloadURL: string;
  _type: string
}
