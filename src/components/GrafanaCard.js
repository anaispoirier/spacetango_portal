import React from "react";
import Graph from "./GrafanaGraph.jsx";

const Card = () => (
  <a href="https://data.spacetango.com/">
    <div className="card-outer">
        <div className="card-inner">
          <div className="card-img">
            <Graph/>
          </div>
          <div className="title-text">
            Telemetry
          </div>
        </div>
    </div>
  </a>
);

export default Card;
