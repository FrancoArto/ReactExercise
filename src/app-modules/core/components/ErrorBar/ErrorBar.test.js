import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ErrorBar } from "..";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<ErrorBar />);
  expect(wrapper.find('SnackBar')).toBeTruthy();

});
