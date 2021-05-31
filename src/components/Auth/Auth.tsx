import React from "react";
import { Button, Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SInput } from "../Form";

interface IAuthData {
  name: string;
  password: string;
}

const Auth = () => {
  const { handleSubmit, control } = useForm<IAuthData>();

  const onSubmit = (data: IAuthData) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
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
