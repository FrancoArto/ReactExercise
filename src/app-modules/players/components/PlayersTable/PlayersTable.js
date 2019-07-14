import React from 'react';
import { Player } from "..";

const PlayersTable = (props) => {

  const players = props.players.map(player => <Player player={player} key={'player' + props.players.indexOf(player)} />)

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Position</th>
          <th>Number</th>
          <th>Nationality</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players}
      </tbody>
    </table>
  );
}

export default PlayersTable;