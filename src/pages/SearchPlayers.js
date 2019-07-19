import React from 'react';
import { connect } from 'react-redux';
import { getPlayers, setSearchTerms, filterPlayersSelector } from '../app-modules/players';
import { SearchForm, PlayersTable } from '../app-modules/players/components';

class SearchPlayers extends React.Component {

  state = {
    playerAge: '',
    playerName: '',
    playerPosition: ''
  }

  componentDidMount() {
    this.props.getPlayers();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.setSearchTerms({
      playerAge: +this.state.playerAge,
      playerName: this.state.playerName,
      playerPosition: this.state.playerPosition
    })
  }

  onPlayerAgeChange = (age) => {
    this.setState({
      playerAge: age
    })
  }

  onPlayerNameChange = (name) => {
    this.setState({
      playerName: name
    })
  }

  onPlayerPositionChange = (position) => {
    this.setState({
      playerPosition: position
    })
  }

  render() {
    return (
      <div>
        <SearchForm
          onPlayerAgeChange={this.onPlayerAgeChange}
          onPlayerNameChange={this.onPlayerNameChange}
          onPlayerPositionChange={this.onPlayerPositionChange}
          onSubmit={this.onFormSubmit}
          playerAge={this.state.playerAge}
          playerName={this.state.playerName}
          playerPosition={this.state.playerPosition} />
          
          <PlayersTable players={this.props.results} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => (
  {
    error: state.error,
    loading: state.loading,
    results: filterPlayersSelector(state)
  }
);



const mapDispatchToProps = {
  getPlayers: () => getPlayers(),
  setSearchTerms: (terms) => setSearchTerms(terms)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayers);
