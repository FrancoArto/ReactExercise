import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchForm } from "..";
import positions from "../../mocks/positions.json";

Enzyme.configure({ adapter: new Adapter() });

describe("search form", () => {
  const onFormSubmit = jest.fn();
  const onPlayerAgeChange = jest.fn();
  const onPlayerNameChange = jest.fn();
  const onPlayerPositionChange = jest.fn();
  let playerAge = "";
  let playerName = "";
  let playerPosition = "";

  it("renders without crashing", () => {
    const rendered = shallow(<SearchForm />);
  });

  it("changes player age", () => {
    const wrapper = mount(
      <SearchForm
        onPlayerAgeChange={onPlayerAgeChange}
        onPlayerNameChange={onPlayerNameChange}
        onPlayerPositionChange={onPlayerPositionChange}
        onSubmit={onFormSubmit}
        playerAge={playerAge}
        playerName={playerName}
        playerPosition={playerPosition}
        positions={positions}
      />
    );

    playerAge = "24";
    const ageInput = wrapper.find("Input").last();
    ageInput.prop("onChange")(playerAge);
    wrapper.setProps({
      playerAge: playerAge
    });
    expect(onPlayerAgeChange).toHaveBeenCalledTimes(1);
    expect(wrapper.props().playerAge).toEqual(playerAge);
  });

  it("changes player name", () => {
    const wrapper = mount(
      <SearchForm
        onPlayerAgeChange={onPlayerAgeChange}
        onPlayerNameChange={onPlayerNameChange}
        onPlayerPositionChange={onPlayerPositionChange}
        onSubmit={onFormSubmit}
        playerAge={playerAge}
        playerName={playerName}
        playerPosition={playerPosition}
        positions={positions}
      />
    );

    playerName = "Romelu Lukaku";
    const nameInput = wrapper.find("Input").first();
    nameInput.prop("onChange")(playerName);
    wrapper.setProps({
      playerName: playerName
    });
    expect(onPlayerNameChange).toHaveBeenCalledTimes(1);
    expect(wrapper.props().playerName).toEqual(playerName);
  });

  it("changes player position", () => {
    const wrapper = mount(
      <SearchForm
        onPlayerAgeChange={onPlayerAgeChange}
        onPlayerNameChange={onPlayerNameChange}
        onPlayerPositionChange={onPlayerPositionChange}
        onSubmit={onFormSubmit}
        playerAge={playerAge}
        playerName={playerName}
        playerPosition={playerPosition}
        positions={positions}
      />
    );

    playerPosition = "Centre-Forward";
    const selectInput = wrapper.find("CustomSelect");
    selectInput.prop("onValueChange")(playerPosition);
    wrapper.setProps({
      playerPosition: playerPosition
    });
    expect(onPlayerPositionChange).toHaveBeenCalledTimes(1);
    expect(wrapper.props().playerPosition).toEqual(playerPosition);
  });

  it("submits form", () => {
    const wrapper = mount(
      <SearchForm
        onPlayerAgeChange={onPlayerAgeChange}
        onPlayerNameChange={onPlayerNameChange}
        onPlayerPositionChange={onPlayerPositionChange}
        onSubmit={onFormSubmit}
        playerAge={playerAge}
        playerName={playerName}
        playerPosition={playerPosition}
        positions={positions}
      />
    );

    wrapper.prop("onSubmit")();

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
