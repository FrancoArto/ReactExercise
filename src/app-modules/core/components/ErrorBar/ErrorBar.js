import React from 'react';
import { Snackbar, makeStyles, SnackbarContent } from '@material-ui/core';

const ErrorBar = (props) => {
  const classes = styles();

  return (
    <Snackbar {...props}>
      <SnackbarContent {...props} className={classes.root} />
    </Snackbar>
  )
}

const styles = makeStyles(theme => ({
  root: {
    background: theme.palette.error.main
  }
}));

export default ErrorBar;