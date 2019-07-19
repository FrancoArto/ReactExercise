import React from 'react';
import { Input, CustomButton, CustomSelect } from '../../../core/components';
import positions from '../../mocks/positions.json';
import { Grid } from '@material-ui/core';

const SearchForm = (props) => {

  const onPlayerAgeChange = (age) => {
    props.onPlayerAgeChange(age);
  }

  const onPlayerNameChange = (name) => {
    props.onPlayerNameChange(name);
  }

  const onPlayerPositionChange = (position) => {
    props.onPlayerPositionChange(position);
  }

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container>
        <Grid xs={12} sm={3}>
          <Input type="text" label="Player name" onValueChange={onPlayerNameChange} value={props.playerName} variant="outlined" />
        </Grid>
        <Grid xs={12} sm={3}>
          <CustomSelect
            fullWidth
            id="positions-select"
            label="Position"
            options={positions}
            onValueChange={onPlayerPositionChange}
            value={props.playerPosition}
            variant="outlined" />
        </Grid>
        <Grid xs={12} sm={3}>
          <Input type="number" max={40} min={18} label="Age" onValueChange={onPlayerAgeChange} value={props.playerAge} variant="outlined" />
        </Grid>
        <Grid xs={12} sm={3}>
          <CustomButton color="primary" type="submit" text="Search" variant="contained" />
        </Grid>
      </Grid>
    </form>
  );
}

export default SearchForm;