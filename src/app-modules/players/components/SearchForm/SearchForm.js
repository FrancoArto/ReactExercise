import React from 'react';
import { Input, Select, Button } from '../../../core/components';
import positions from '../../mocks/positions.json';

const SearchForm = ( props ) => {

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
      <Input type="text" onValueChange={onPlayerNameChange} value={props.playerName} />
      <Select options={positions} onValueChange={onPlayerPositionChange} value={props.playerPosition} />
      <Input type="number" max={40} min={18} onValueChange={onPlayerAgeChange} value={props.playerAge} /> 
      <Button type="submit" text="Search" />
    </form>
  );
}

export default SearchForm;