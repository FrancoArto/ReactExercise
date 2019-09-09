import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchForm } from "..";
import positions from "../../mocks/positions.json";

Enzyme.configure({ adapter: new Adapter() });

describe("search form", () => {
  const onFormSubmit = jest.fn();

  it("renders without crashing", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('SearchForm')).toBeTruthy();
  });

  it("submits form", () => {
    const wrapper = shallow(
      <SearchForm
        onSubmit={onFormSubmit}
        positions={positions}
      />
    );

    wrapper.prop("onSubmit")();

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
