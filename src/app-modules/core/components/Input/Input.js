import React from 'react';
import { TextField } from '@material-ui/core';

const Input = ( props ) => {

  const onValueChange = (event) => {
    props.onValueChange(event.target.value);
  } 

  return (
    <TextField {...props} onChange={onValueChange} value={props.value} />
  );
}

export default Input;