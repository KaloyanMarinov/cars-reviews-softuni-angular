import { IUser } from ".";

export interface IAuthState {
  authToken: string | null;
  user: IUser | null;
}
