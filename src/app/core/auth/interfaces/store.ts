import { IRole, IUser } from ".";

export interface IAuthState {
  authToken: string;
  user: IUser;
}
