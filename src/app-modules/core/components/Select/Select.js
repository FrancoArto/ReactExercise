import React, { useState } from 'react';

const Select = ({ props }) => {
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  const renderOptions = (options) => {
    const optionsArray = options.map(option => <option value={option.value}>{option.name}</option>);
    return optionsArray;
  }

  return (
    <select>
      {renderOptions}
    </select>
  )
}

export default Select;