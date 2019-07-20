import React from 'react';
import { Button } from '@material-ui/core';

const CustomButton = ( props ) => (
    <Button {...props} onClick={props.onClick}>{props.text}</Button>
);

export default CustomButton;