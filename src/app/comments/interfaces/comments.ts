import { IKMD } from "src/app/shared/interfaces";

export interface IAddComment {
  comment: string;
  user_id: string | undefined;
  post_id: string | undefined;
  rating: number;
  author: string;
}

export interface IComment {
  _id: string;
  author: string;
  comment: string;
  user_id: string;
  post_id: string;
  rating: number;
  _acl: { creator: string; };
  _kmd: IKMD;
}
