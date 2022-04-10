import { IKMD } from "src/app/shared/interfaces";

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

export interface IUser {
  _id: string;
  username: string;
  firstname?: string;
  lastname?: string;
  _kmd?: IKMD;
}

export interface IloginSuccess {
  authToken: string;
  user: IUser;
}

export interface IRegisterSuccess {
  password: string;
  username: string
  _id: string
  _kmd: IKMD
}
