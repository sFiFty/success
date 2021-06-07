import React from "react";
import { Button, Card, Container, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useSelector } from "../../redux/utils";
import { SInput } from "../../components/Form";
import firebaseApp from "../../utils/firebase";
import { closeAuthModal, setUser } from "./utils";
import { shallowEqual, useStore } from "react-redux";

interface IAuthData {
  email: string;
  password: string;
}

const Auth = () => {
  const store = useStore();
  const auth = getAuth(firebaseApp);
  const { handleSubmit, control } = useForm<IAuthData>();

  const onSubmit = (data: IAuthData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  const onLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      setUser(store, data.user);
    } catch (error) {
      console.error(error);
    }
    handleCloseModal();
  };

  const logout = () => {
    signOut(auth);
  };

  const handleCloseModal = () => closeAuthModal(store);

  const isModalOpen = useSelector(
    (state) => state.modules.auth.modalOpen,
    shallowEqual
  );

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card>
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
      </Card>
    </Modal>
  );
};

export default Auth;
