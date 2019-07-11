import React from 'react';

const Input = ( props ) => {

  const onValueChange = (event) => {
    props.onValueChange(event.target.value);
  } 

  return (
    <input {...props} onChange={onValueChange} value={props.value} />
  );
}

export default Input;