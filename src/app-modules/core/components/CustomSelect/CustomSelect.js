import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput
} from "@material-ui/core";

const CustomSelect = props => {
  const onValueChange = event => {
    props.onValueChange(event.target.value);
  };

  const options = props.options.map(option => (
    <MenuItem
      key={`option-${props.options.indexOf(option)}`}
      value={option.value}
    >
      {option.name}
    </MenuItem>
  ));

  return (
    <FormControl variant="outlined" fullWidth={props.fullWidth}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <Select
        fullWidth={props.fullWidth}
        input={
          <OutlinedInput
            id={props.id}
            labelWidth={props.labelWidth}
            value={props.selectedValue}
          />
        }
        onChange={onValueChange}
        value={props.selectedValue}
      >
        {options}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
