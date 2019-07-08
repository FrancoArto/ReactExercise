import React, { useState } from 'react';

const Select = ( props ) => {
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  const onValueChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const renderOptions = (options) => {
    const optionsArray = options.map(option => <option key={`option-${options.indexOf(option)}`} value={option.value}>{option.name}</option>);
    return optionsArray;
  }

  return (
    <select onChange={onValueChange} value={selectedValue}>
      {renderOptions(props.options)}
    </select>
  );
}

export default Select;