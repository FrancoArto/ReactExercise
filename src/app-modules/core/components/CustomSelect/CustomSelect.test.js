import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomSelect from './CustomSelect';
import positions from '../../../players/mocks/positions.json';

Enzyme.configure({ adapter: new Adapter() });

describe('custom select', () => {
  it('renders without crashing', () => {
    const rendered = shallow(<CustomSelect options={positions} />);
  });

  it('handles value change', () => {
    var inputValue = '';
    const onValueChange = (value) => {
      inputValue = value;
      return value;
    }
    const wrapper = mount(<CustomSelect
      onChange={onValueChange}
      options={positions}
      selectedValue={inputValue} />);

    inputValue = 'Centre-Forward';
    const selectInput = wrapper.find('CustomSelect').first();
    selectInput.props().onChange(inputValue);
    wrapper.setProps({
      value: inputValue
    });
    wrapper.update();
    expect(wrapper.props().value).toEqual(inputValue);
  });
});