import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomSelect from "./CustomSelect";
import positions from "../../../players/mocks/positions.json";
import { Select } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

describe("custom select", () => {
  const onChangeEvent = {
    target: {
      value: "Centre-Forward"
    }
  };

  it("renders without crashing", () => {
    const rendered = shallow(<CustomSelect options={positions} />);
  });

  it("handles value change", () => {
    const onValueChange = jest.fn();
    let inputValue = "";

    const wrapper = mount(
      <CustomSelect
        onValueChange={onValueChange}
        options={positions}
        selectedValue={inputValue}
      />
    );

    inputValue = "Centre-Forward";
    const select = wrapper.find(Select);
    select.prop("onChange")(onChangeEvent);
    wrapper.setProps({
      selectedValue: inputValue
    });
    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(wrapper.props().selectedValue).toEqual(inputValue);
  });
});
