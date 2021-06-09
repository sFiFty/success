import AuthActions from "./store/authActions";
import { AppStore } from "../../redux/configureStore";
import { Auth, signOut, User } from "@firebase/auth";
import { IUser } from "./store/authTypes";

// Mao firebase user to local user
export const mapUser = (user: User): IUser => ({
  id: user.uid,
  avatar: user.photoURL ? user.photoURL : undefined,
  name: user.displayName ? user.displayName : undefined,
  email: user.email ? user.email : undefined,
  emailVerified: user.emailVerified,
});

export const showAuthModal = (store: AppStore) => {
  store.dispatch(AuthActions.setModalOpen(true));
};

export const closeAuthModal = (store: AppStore) => {
  store.dispatch(AuthActions.setModalOpen(false));
};

export const logout = async (auth: Auth) => {
  await signOut(auth);
};
