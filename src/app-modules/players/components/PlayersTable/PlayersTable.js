import React from "react";
import { Player } from "..";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles
} from "@material-ui/core";

const PlayersTable = props => {
  const players = props.players.map(player => (
    <Player player={player} key={"player" + props.players.indexOf(player)} />
  ));

  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <StyledTableCell>Player</StyledTableCell>
          <StyledTableCell>Position</StyledTableCell>
          <StyledTableCell>Number</StyledTableCell>
          <StyledTableCell>Nationality</StyledTableCell>
          <StyledTableCell>Age</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>{players}</TableBody>
    </Table>
  );
};

const StyledTableHead = withStyles(theme => ({
  root: {
    background: "#000000"
  }
}))(TableHead);

const StyledTableCell = withStyles(theme => ({
  root: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center"
  }
}))(TableCell);

export default PlayersTable;
