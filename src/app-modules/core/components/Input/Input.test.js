import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

Enzyme.configure({ adapter: new Adapter() });

describe('input component', () => {
  it('renders without crashing', () => {
    const rendered = shallow(<Input />);
  });

  it('handles value change', () => {
    var inputValue = '';
    const onValueChange = (value) => {
      inputValue = value;
      return value;
    }
    const wrapper = mount(<Input
      onChange={onValueChange}
      value={inputValue} />);

    inputValue = 'Hola';
    const textInput = wrapper.find('Input').first();
    textInput.props().onChange(inputValue);
    wrapper.setProps({
      value: inputValue
    });
    wrapper.update();
    expect(wrapper.props().value).toEqual(inputValue);
  });
});