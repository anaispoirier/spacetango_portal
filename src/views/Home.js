import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import GrafanaCard from "../components/GrafanaCard";
import YarkonCard from "../components/YarkonCard";

// import Blob1 from "../components/BackgroundBlobs/Blob1.js";

import Tilt from 'react-tilt';


const Home = () => (
  <div className="card-container">
    <div className="d-lg-flex">
      {/* <div className="stars"></div>
      <div className="twinkling"></div> */}
      <Tilt className="Tilt" options={{ max : 8, scale: 1.02 }} >
        <GrafanaCard />
      </Tilt>
      <Tilt className="Tilt" options={{ max : 8, scale: 1.02 }} >
        <YarkonCard />
      </Tilt>
    </div>
  </div>
);

export default Home;
