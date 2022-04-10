import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "src/app/app-router-serializer";
import { IMessage } from ".";

export interface IAppState {
  message: IMessage
}

export interface IRouterState {
  router: RouterReducerState<RouterStateUrl>;
}
