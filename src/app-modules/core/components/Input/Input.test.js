import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "./Input";
import { TextField } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

describe("input component", () => {
  const onChangeEvent = {
    target: {
      value: "Example"
    }
  };

  it("renders without crashing", () => {
    const rendered = shallow(<Input />);
  });

  it("handles value change", () => {
    let inputValue = "";
    const onValueChange = jest.fn();
    const wrapper = mount(
      <Input onChange={onValueChange} value={inputValue} />
    );

    inputValue = "Example";
    const input = wrapper.find(TextField);
    input.prop("onChange")(onChangeEvent);
    wrapper.setProps({
      value: inputValue
    });

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(wrapper.props().value).toEqual(inputValue);
  });
});
