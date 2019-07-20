import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Player = (props) => (
  <StyledTableRow>
    <StyledTableCell>
      {props.player.name}
    </StyledTableCell>
    <StyledTableCell>
      {props.player.position}
    </StyledTableCell>
    <StyledTableCell>
      {props.player.jerseyNumber}
    </StyledTableCell>
    <StyledTableCell>
      {props.player.nationality}
    </StyledTableCell>
    <StyledTableCell>
      {props.player.age}
    </StyledTableCell>
  </StyledTableRow>
)

const StyledTableCell = withStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#D0CDCC'
    }
  }
}))(TableRow);

export default Player;