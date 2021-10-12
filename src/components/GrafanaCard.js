import React from "react";
import Graph from "./GrafanaGraph.jsx";

const Card = () => (
  <div className="card-outer" onClick={() => {window.open("https://data.spacetango.com/")} }>
      <div className="card-inner">
        <div className="card-img">
          <Graph/>
        </div>
        <div className="title-text">
          Telemetry
        </div>
      </div>
  </div>
);

export default Card;
