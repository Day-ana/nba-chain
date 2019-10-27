import React from "react";
import Player from "./Player.js";
import GridItem from "components/Grid/GridItem.js";

const PlayerContainer = props => {
  return props.players.map((player, i) => {
    if (i < 52)
      return (
        <GridItem xs={12} sm={6} md={3} key={i}>
          <Player player={player} />
        </GridItem>
      );
  });
};

export default PlayerContainer;
