import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomSelect from './CustomSelect';
import positions from '../../../players/mocks/positions.json';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = shallow(<CustomSelect options={positions} />);
});