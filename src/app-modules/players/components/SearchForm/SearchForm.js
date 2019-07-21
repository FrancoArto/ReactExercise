import React from 'react';
import { Input, CustomButton, CustomSelect } from '../../../core/components';
import { Grid, makeStyles } from '@material-ui/core';

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

  const classes = styles();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container className={classes.container} justify="center" spacing={2}>
        <Grid item xs={12} sm={3}>
          <Input fullWidth type="text" label="Player name" onChange={onPlayerNameChange} value={props.playerName} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomSelect
            fullWidth
            id="positions-select"
            label="Position"
            labelWidth={60}
            options={props.positions}
            onValueChange={onPlayerPositionChange}
            selectedValue={props.playerPosition}
            variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input fullWidth type="number" max={40} min={18} label="Age" onChange={onPlayerAgeChange} value={props.playerAge} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CustomButton fullWidth color="primary" type="submit" text="Search" variant="contained" />
        </Grid>
      </Grid>
    </form>
  );
}

const styles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    padding: 0,

    [theme.breakpoints.up('lg')]: {
      padding: '0 20%'
    }
  }
}))

export default SearchForm;