import { IKMD } from ".";

export interface IComment {
  _id: string,
  author: string,
  comment: string,
  user_id: string,
  post_id: string,
  rating: number,
  _acl: {
    creator: string
  },
  _kmd: IKMD
}
