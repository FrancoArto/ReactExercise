import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, OutlinedInput } from '@material-ui/core';

const CustomSelect = (props) => {

  const onValueChange = (event) => {
    props.onValueChange(event.target.value);
  }

  const renderOptions = (options) => {
    const optionsArray = options.map(option => <MenuItem key={`option-${options.indexOf(option)}`} value={option.value}>{option.name}</MenuItem>);
    return optionsArray;
  }

  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <Select fullWidth={props.fullWidth} input={<OutlinedInput id={props.id} />} onChange={onValueChange} value={props.selectedValue}>
        {renderOptions(props.options)}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;