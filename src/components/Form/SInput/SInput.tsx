import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

interface Props {
  // eslint-disable-next-line
  control: Control<any>;
  name: string;
  label: string;
  errorMessage: string;
}

const SInput = ({
  control,
  name,
  errorMessage,
  ...rest
}: Props & TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          variant="outlined"
          fullWidth
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          {...rest}
        />
      )}
      rules={{ required: errorMessage }}
    />
  );
};

export default SInput;
