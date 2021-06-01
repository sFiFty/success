import React from "react";
import { Button, Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { SInput } from "../Form";
import firebaseApp from "../../utils/firebase";

interface IAuthData {
  email: string;
  password: string;
}

const Auth = () => {
  const { handleSubmit, control } = useForm<IAuthData>();
  const auth = getAuth(firebaseApp);
  const onSubmit = (data: IAuthData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  onAuthStateChanged(auth, (user) => {
    console.log("currentUser", user);
  });

  const onLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <Container maxWidth="sm">
      <Button onClick={onLoginWithGoogle}>Login with Google</Button>
      <Button onClick={logout}>Logout</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SInput
          type="email"
          name="email"
          label="Email"
          errorMessage="Email is required"
          control={control}
        />
        <SInput
          type="password"
          name="password"
          label="Password"
          errorMessage="Password is required"
          control={control}
        />
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Auth;
