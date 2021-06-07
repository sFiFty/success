import { createReducer } from "@reduxjs/toolkit";
import { mapUser } from "../utils";
import AuthActions from "./authActions";
import { IAuthState } from "./authTypes";

const initialState: IAuthState = {
  modalOpen: false,
  user: null,
};

export const AuthReducer = createReducer(initialState, (builder) => {
  builder.addCase(AuthActions.setModalOpen, (state, action) => {
    state.modalOpen = action.payload.modalOpen;
  });
  builder.addCase(AuthActions.setUser, (state, action) => {
    state.user = mapUser(action.payload.user);
  });
  builder.addCase(AuthActions.clearUser, (state) => {
    state.user = null;
  });
});
