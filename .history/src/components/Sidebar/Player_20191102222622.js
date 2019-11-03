import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import CardIcon from "components/Card/CardIcon.js";
import Danger from "components/Typography/Danger.js";
import Store from "@material-ui/icons/Store";

import CardFooter from "components/Card/CardFooter.js";
const Player = props => {
  console.log(props);
  const { position, name, image, jersey_number, rookie } = props.player;

  return (
    <Card>
      <CardHeader color="success" stats icon>
        <img src={image} className="img-player"></img>
      </CardHeader>
      <CardBody>
        <h3>
          {position} - {jersey_number}
        </h3>
        <p>{name}</p>
        {rookie && <p>Rookie</p>}
      </CardBody>
      <CardFooter stats>
        <div className={Warning}>
          <a href="#">Pick for your Fantasy Player >></a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Player;
