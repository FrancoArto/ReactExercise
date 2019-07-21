import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = shallow(<Input />);
});