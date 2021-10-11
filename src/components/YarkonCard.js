import React from "react";
import Graph from "./YarkonGraph.jsx";

const Card = () => (
  <div className="card-outer" onClick={() => {window.open("http://yarkon.corvettecole.com/")} }>
      <div className="card-inner">
        <div className="card-img">
          <Graph/>
        </div>
        <div className="title-text">
          Media
        </div>
      </div>
  </div>
);

export default Card;
