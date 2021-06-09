import { IUser } from "./store/authTypes";
import { useCookies } from "react-cookie";
import { User } from "@firebase/auth";
import { mapUser } from "./utils";
import { useState } from "react";

interface ReturnType {
  clearUser: () => void;
  user?: IUser;
  saveUser: (user: User) => void;
}

export const useCookieAuthData = (): ReturnType => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth-user"]);
  const [user, setUser] = useState<IUser | undefined>(
    cookies["auth-user"] as IUser
  );

  const clearUser = () => {
    removeCookie("auth-user", { path: "/" });
    setUser(undefined);
  };

  const saveUser = (firebaseUser: User) => {
    const user = mapUser(firebaseUser);
    setUser(user);
    setCookie("auth-user", user, { path: "/" });
  };

  return {
    clearUser,
    saveUser,
    user,
  };
};
