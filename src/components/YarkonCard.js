import React from "react";
import Graph from "./YarkonGraph.jsx";

const Card = () => (
  <a href="https://media-test.spacetango.com/">
    <div className="card-outer">
        <div className="card-inner">
          <div className="card-img">
            <Graph/>
          </div>
          <div className="title-text">
            Media
          </div>
        </div>
    </div>
  </a>
);

export default Card;
