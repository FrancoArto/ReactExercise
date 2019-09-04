import React from 'react';
import { Input, CustomButton, CustomSelect } from '../../../core/components';
import { Grid, makeStyles } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

let SearchForm = (props) => {

  const { positions } = props

  const classes = styles();

  return (
    <form onSubmit={props.handleSubmit}>
      <Grid container className={classes.container} justify="center" spacing={2}>
        <Grid item xs={12} sm={3}>
          <Field name="playerName" component={props => 
            <Input fullWidth type="text" label="Player name" onChange={props.input.onChange} value={props.input.value} variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Field name="playerPosition" component={props =>
            <CustomSelect
              fullWidth
              id="positions-select"
              label="Position"
              labelWidth={60}
              options={positions}
              onValueChange={props.input.onChange}
              selectedValue={props.input.value}
              variant="outlined" />
          } />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Field name="playerAge" component={props =>
            <Input fullWidth type="number" InputProps={{ inputProps: { max: 40, min: 18 } }} label="Age" onChange={props.input.onChange} value={props.input.value} variant="outlined" />
          } />
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

SearchForm = reduxForm({
  form: 'playersForm',
  initialValues: {
    playerAge: '',
    playerName: '',
    playerPosition: ''
  }
})(SearchForm)

export default SearchForm;