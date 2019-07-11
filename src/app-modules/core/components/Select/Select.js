import React from 'react';

const Select = ( props ) => {

  const onValueChange = (event) => {
    props.onValueChange(event.target.value);
  }

  const renderOptions = (options) => {
    const optionsArray = options.map(option => <option key={`option-${options.indexOf(option)}`} value={option.value}>{option.name}</option>);
    return optionsArray;
  }

  return (
    <select onChange={onValueChange} value={props.selectedValue}>
      {renderOptions(props.options)}
    </select>
  );
}

export default Select;