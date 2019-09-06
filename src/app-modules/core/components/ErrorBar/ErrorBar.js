import React from "react";
import { Snackbar, makeStyles, SnackbarContent } from "@material-ui/core";

const ErrorBar = props => {
  const classes = styles();

  return (
    <Snackbar {...props}>
      <SnackbarContent
        aria-describedby="error-message"
        message={
          <span className="message" id="error-message">
            {props.message}
          </span>
        }
        className={classes.root}
      />
    </Snackbar>
  );
};

const styles = makeStyles(theme => ({
  root: {
    background: theme.palette.error.main,
    justifyContent: "center"
  }
}));

export default ErrorBar;
