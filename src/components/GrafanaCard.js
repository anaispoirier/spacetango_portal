import React from "react";
import Graph from "./GrafanaGraph.jsx";

const Card = () => (
  <div className="card-outer" onClick={() => {window.open("http://grafana.corvettecole.com:3000/")} }>
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
