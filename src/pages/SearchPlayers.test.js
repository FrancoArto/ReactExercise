import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchPlayers } from "./SearchPlayers";
import players from "../app-modules/players/mocks/players.json";

Enzyme.configure({ adapter: new Adapter() });

describe("search players page", () => {
  const getPlayers = jest.fn();
  const setSearchTerms = jest.fn();
  const mockedSubmitEvent = {
    playerAge: 26,
    playerName: "Romelu Lukaku",
    playerPosition: "Centre-Forward"
  };

  const classesMock = {
    root: "root"
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders results without crashing", () => {
    const wrapper = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );

    const table = wrapper.find("PlayersTable");

    expect(table).toHaveLength(1);
  });

  it("renders error without crashing", () => {
    const wrapper = shallow(
      <SearchPlayers
        classes={classesMock}
        error="Some error message"
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );
    const errorBar = wrapper.find("ErrorBar");
    expect(errorBar).toHaveLength(1);
  });

  it("renders loading spinner without crashing", () => {
    const wrapper = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={true}
        results={[]}
        setSearchTerms={setSearchTerms}
      />
    );
    const spinner = wrapper.findWhere(element => element.hasClass('loading'));
    expect(spinner).toHaveLength(1);
  });

  it("renders no results message", () => {
    const wrapper = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={[]}
        setSearchTerms={setSearchTerms}
      />
    );
    const errorBar = wrapper.find("ErrorBar");
    expect(errorBar.html()).toContain("No results to show");
  });

  it("calls getPlayers action", () => {
    shallow(
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

  it("sets searchterms to state", () => {
    const wrapper = shallow(
      <SearchPlayers
        classes={classesMock}
        error={null}
        getPlayers={getPlayers}
        loading={false}
        results={players}
        setSearchTerms={setSearchTerms}
      />
    );
    wrapper.instance().onFormSubmit(mockedSubmitEvent);

    expect(setSearchTerms).toHaveBeenCalledTimes(1);
  });
});
