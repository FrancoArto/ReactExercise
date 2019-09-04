import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getPlayers, setSearchTerms, filterPlayersSelector } from '../app-modules/players';
import { SearchForm, PlayersTable } from '../app-modules/players/components';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import positions from '../app-modules/players/mocks/positions.json';
import { ErrorBar } from '../app-modules/core/components';

export class SearchPlayers extends React.Component {

  componentDidMount() {
    this.props.getPlayers();
  }

  onFormSubmit = values => {
    console.log(values);
    this.props.setSearchTerms({
      playerAge: +values.playerAge,
      playerName: values.playerName.trimRight(),
      playerPosition: values.playerPosition
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container direction="column">
        {!this.props.error && !this.props.loading &&
          <Box className="main-content">
            <Grid className="form row" item>
              <SearchForm
                onPlayerAgeChange={this.onPlayerAgeChange}
                onPlayerNameChange={this.onPlayerNameChange}
                onPlayerPositionChange={this.onPlayerPositionChange}
                onSubmit={this.onFormSubmit}
                positions={positions} />
            </Grid>
            {this.props.results.length > 0 &&
              <Grid className="row table-container" item>

                <PlayersTable players={this.props.results} />

              </Grid>
            }
            {this.props.results.length === 0 &&
              <ErrorBar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                message="No results to show"
                open={true}
              />
            }
          </Box>
        }
        {this.props.error && !this.props.loading &&
          <ErrorBar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            message={`An error ocurred: ${this.props.error.toString()}. Please reload the page`}
            open={true}
          />
        }
        {this.props.loading &&
          <Box className="row loading">
            <CircularProgress size={120} />
          </Box>
        }
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => (
  {
    error: state.playersReducer.error,
    loading: state.playersReducer.loading,
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

    '& .main-content': {
      width: '-webkit-fill-available',

      '& .row': {
        background: '#FFFFFF',
        borderRadius: 5,
        padding: 12,
  
        '&.loading': {
          alignSelf: 'center',
          justifySelf: 'center',
          width: 'auto'
        },
  
        '&.table-container': {
          marginTop: 32,
          overflowX: 'auto',
          padding: 0
        }
      },
    },

    

    '@media screen and (max-width: 599px)': {
      margin: 0
    }
  }
};

export default compose(withStyles(styles, { name: 'SearchPlayers' }), connect(mapStateToProps, mapDispatchToProps))(SearchPlayers);
