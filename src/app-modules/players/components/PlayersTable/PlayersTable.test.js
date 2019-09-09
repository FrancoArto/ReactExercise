import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PlayersTable } from "..";
import Players from "../../mocks/players.json";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<PlayersTable players={Players} />);
  expect(wrapper.find('PlayersTable')).toBeTruthy();
});
