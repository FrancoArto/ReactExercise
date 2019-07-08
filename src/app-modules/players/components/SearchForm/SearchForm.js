import React from 'react';
import { Input, Select, Button } from '../../../core/components';
import positions from '../../mocks/positions.json';

const SearchForm = ( props ) => {
  return (
    <div>
      <Input type="text" />
      <Select options={positions} />
      <Input type="number" max={40} min={18} /> 
      <Button onClick={props.onSubmit} text="Search" />
    </div>
  );
}

export default SearchForm;