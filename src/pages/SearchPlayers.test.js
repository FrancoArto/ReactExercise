import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchPlayers } from "./SearchPlayers";
import players from "../app-modules/players/mocks/players.json";

Enzyme.configure({ adapter: new Adapter() });

describe("search form", () => {
  const getPlayers = jest.fn();
  const setSearchTerms = jest.fn();
  const mockedSubmitEvent = {
    preventDefault: () => {}
  };

  let playerAge = "";
  let playerName = "";
  let playerPosition = "";
  const classesMock = {
    root: "root"
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders results without crashing", () => {
    const rendered = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );
  });

  it("renders error without crashing", () => {
    const rendered = shallow(
      <SearchPlayers
        classes={classesMock}
        error="Some error message"
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );
  });

  it("renders loading spinner without crashing", () => {
    const rendered = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={true}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );
  });

  it("renders no results message", () => {
    const rendered = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={true}
        results={[]}
        setSearchTerms={setSearchTerms}
      />
    );
  });

  it("calls getPlayers action", () => {
    const rendered = mount(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    expect(getPlayers).toHaveBeenCalledTimes(1);
  });

  it("sets player age to state", () => {
    const wrapper = mount(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    playerAge = "24";
    wrapper.instance().onPlayerAgeChange(playerAge);

    expect(wrapper.state().playerAge).toEqual(playerAge);
  });

  it("sets player name to state", () => {
    const wrapper = mount(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    playerName = "Romelu";
    wrapper.instance().onPlayerNameChange(playerName);

    expect(wrapper.state().playerName).toEqual(playerName);
  });

  it("sets player position to state", () => {
    const wrapper = mount(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    playerPosition = "Centre-Forward";
    wrapper.instance().onPlayerPositionChange(playerPosition);

    expect(wrapper.state().playerPosition).toEqual(playerPosition);
  });

  it("sets searchterms to state", () => {
    const wrapper = mount(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    wrapper.setState({
      playerAge: 26,
      playerName: "Romelu Lukaku",
      playerPosition: "Centre-Forward"
    });
    wrapper.instance().onFormSubmit(mockedSubmitEvent);

    expect(setSearchTerms).toHaveBeenCalledTimes(1);
  });
});
