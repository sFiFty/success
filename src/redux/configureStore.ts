import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ModuleReducer } from "./modules";

import { IState } from "./reduxType";

const reducer = combineReducers<IState>({
  modules: ModuleReducer,
});

export const store = configureStore<IState>({
  reducer: reducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
