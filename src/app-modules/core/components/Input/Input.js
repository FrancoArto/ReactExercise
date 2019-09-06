import React from "react";
import { TextField } from "@material-ui/core";

const Input = props => {
  const onValueChange = event => {
    props.onChange(event.target.value);
  };

  return <TextField {...props} onChange={onValueChange} />;
};

export default Input;
