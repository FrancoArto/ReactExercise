import React from 'react';

const Player = (props) => (
  <tr>
    <td>
      {props.player.name}
    </td>
    <td>
      {props.player.position}
    </td>
    <td>
      {props.player.jerseyNumber}
    </td>
    <td>
      {props.player.nationality}
    </td>
    <td>
      {props.player.age}
    </td>
  </tr>
)

export default Player;