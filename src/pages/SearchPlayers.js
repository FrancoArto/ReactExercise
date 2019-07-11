import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SearchForm } from '../app-modules/players/components';
import { getPlayers, setSearchTerms } from '../app-modules/players';

const SearchPlayers = (props) => {

  const [playerAge, setPlayerAge] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');

  useEffect(() => {
    props.getPlayers();
  });

  const onPlayerAgeChange = (age) => {
    setPlayerAge(age);
  }

  const onPlayerNameChange = (name) => {
    setPlayerName(name);
  }

  const onPlayerPositionChange = (position) => {
    setPlayerPosition(position);
  }

  return (
    <SearchForm
      onPlayerAgeChange={onPlayerAgeChange}
      onPlayerNameChange={onPlayerNameChange}
      onPlayerPositionChange={onPlayerPositionChange}
      onSubmit={props.setSearchTerms({
        playerAge: playerAge,
        playerName: playerName,
        playerPosition: playerPosition
      })} />
  );
}

const mapStateToProps = (state, props) => (
  {
    error: state.error,
    loading: state.loading,
    results: state.results
  }
);



const mapDispatchToProps = {
  getPlayers: () => getPlayers(),
  setSearchTerms: (terms) => setSearchTerms(terms)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayers);
