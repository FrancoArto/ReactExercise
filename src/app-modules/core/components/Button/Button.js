import React from 'react';

const Button = ( props ) => (
    <button {...props} onClick={props.onClick}>{props.text}</button>
);

export default Button;