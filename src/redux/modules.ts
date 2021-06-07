import { Reducer, combineReducers } from "redux";
import { AuthReducer } from "../modules/Auth/store/authReducer";
import { IAuthState } from "../modules/Auth/store/authTypes";

export interface IModuleState {
  auth: IAuthState;
}

export const ModuleReducer = combineReducers({
  auth: AuthReducer,
}) as Reducer<IModuleState>;
