import React from "react";
import Player from "./Player.js";
import GridItem from "components/Grid/GridItem.js";

const getRandomPlayers = iterable => {
  const getRandomItem = iterable =>
    iterable.get(
      [...iterable.keys()][Math.floor(Math.random() * iterable.size)]
    );
};

const PlayerContainer = props => {
  return props.players.map((player, i) => {
    if (i < 16)
      return (
        <GridItem xs={12} sm={6} md={3} key={i}>
          <Player player={player} />
        </GridItem>
      );
  });
};

export default PlayerContainer;
