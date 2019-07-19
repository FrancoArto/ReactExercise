import React from 'react';
import { Player } from "..";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const PlayersTable = (props) => {

  const players = props.players.map(player => <Player player={player} key={'player' + props.players.indexOf(player)} />)

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Player</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Number</TableCell>
          <TableCell>Nationality</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {players}
      </TableBody>
    </Table>
  );
}

export default PlayersTable;