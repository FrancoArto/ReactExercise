import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Player } from "..";
import Players from "../../mocks/players.json";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<Player player={Players[0]} />);
  expect(wrapper.find('Player')).toBeTruthy();
});
