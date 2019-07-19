import React from 'react';
import { Input, CustomButton, CustomSelect } from '../../../core/components';
import positions from '../../mocks/positions.json';

const SearchForm = (props) => {

  const onPlayerAgeChange = (age) => {
    props.onPlayerAgeChange(age);
  }

  const onPlayerNameChange = (name) => {
    props.onPlayerNameChange(name);
  }

  const onPlayerPositionChange = (position) => {
    props.onPlayerPositionChange(position);
  }

  return (
    <form onSubmit={props.onSubmit}>
      <Input type="text" label="Player name" onValueChange={onPlayerNameChange} value={props.playerName} variant="outlined" />
      <CustomSelect
        id="positions-select"
        label="Position" 
        options={positions} 
        onValueChange={onPlayerPositionChange} 
        value={props.playerPosition} 
        variant="outlined" />
      <Input type="number" max={40} min={18} label="Age" onValueChange={onPlayerAgeChange} value={props.playerAge} variant="outlined" />
      <CustomButton color="primary" type="submit" text="Search" variant="contained" />
    </form>
  );
}

export default SearchForm;