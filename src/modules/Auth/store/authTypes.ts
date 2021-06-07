import { User } from "@firebase/auth";

export interface IUser {
  id: string;
  avatar?: string;
  name?: string;
  email?: string;
  emailVerified: boolean;
}

export interface IAuthState {
  modalOpen: boolean;
  user: IUser | null;
}
