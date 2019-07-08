import React, { useState } from 'react';

const Input = ( props ) => {
  const [value, setValue] = useState('');

  const onValueChange = (event) => {
    setValue(event.target.value);
  } 

  return (
    <input {...props} onChange={onValueChange} value={value} />
  );
}

export default Input;