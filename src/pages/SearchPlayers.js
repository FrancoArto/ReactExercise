import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchForm } from '../app-modules/players/components';
import { retrievePlayers } from '../app-modules/players';

const SearchPlayers = (props) => {

  useEffect(() => {
    props.retrievePlayers();
  });

  return (
    <SearchForm onSubmit={() => { }} />
  );
}

const mapStateToProps = (state, props) => (
  {
    error: state.error,
    loading: state.loading,
    players: state.players,
    results: state.results
  }
);



const mapDispatchToProps = {
  retrievePlayers: () => retrievePlayers()
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayers);
