import React from "react";
import Player from "./Player.js";
import GridItem from "components/Grid/GridItem.js";

const getRandomPlayers = array => {
  let items = Array.from(array);
  return items[Math.floor(Math.random() * items.length)];
};

const PlayerContainer = props => {
  return props.players.map((player, i) => {
    if (i < 16)
      return (
        <GridItem xs={12} sm={6} md={3} key={i}>
          <Player player={getRandomPlayers()} />
        </GridItem>
      );
  });
};

export default PlayerContainer;
