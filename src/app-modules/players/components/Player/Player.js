import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const Player = (props) => (
  <TableRow>
    <TableCell>
      {props.player.name}
    </TableCell>
    <TableCell>
      {props.player.position}
    </TableCell>
    <TableCell>
      {props.player.jerseyNumber}
    </TableCell>
    <TableCell>
      {props.player.nationality}
    </TableCell>
    <TableCell>
      {props.player.age}
    </TableCell>
  </TableRow>
)

export default Player;