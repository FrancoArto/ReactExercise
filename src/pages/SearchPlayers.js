import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getPlayers, setSearchTerms, filterPlayersSelector } from '../app-modules/players';
import { SearchForm, PlayersTable } from '../app-modules/players/components';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

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
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container direction="column">
        <Grid className="form row" item>
          <SearchForm
            onPlayerAgeChange={this.onPlayerAgeChange}
            onPlayerNameChange={this.onPlayerNameChange}
            onPlayerPositionChange={this.onPlayerPositionChange}
            onSubmit={this.onFormSubmit}
            playerAge={this.state.playerAge}
            playerName={this.state.playerName}
            playerPosition={this.state.playerPosition} />
        </Grid>
        <Grid className="row table-container" item>
          <PlayersTable players={this.props.results} />
        </Grid>
      </Grid>
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

const styles = {
  root: {
    margin: 32,
    width: 'auto',

    '& .row': {
      background: '#FFFFFF',
      borderRadius: 5,
      padding: 12,

      '&.table-container': {
        marginTop: 32,
        padding: 0
      }
    },

    '@media screen and (max-width: 599px)': {
      margin: 0
    }
  }
};

export default compose(withStyles(styles, { name: 'SearchPlayers'}), connect(mapStateToProps, mapDispatchToProps))(SearchPlayers);
