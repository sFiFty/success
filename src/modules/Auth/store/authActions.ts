import { User } from "@firebase/auth";
import { createAction } from "@reduxjs/toolkit";

const AuthActions = {
  setModalOpen: createAction("MODULE_AUTH_SET_MODAL_OPEN", (open: boolean) => {
    return {
      payload: {
        modalOpen: open,
      },
    };
  }),
  setUser: createAction("MODULE_AUTH_SET_USER", (user: User) => {
    return {
      payload: {
        user,
      },
    };
  }),
  clearUser: createAction("MODULE_AUTH_CLEAR_USER"),
};

export default AuthActions;
