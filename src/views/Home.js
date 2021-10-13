import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import GrafanaCard from "../components/GrafanaCard";
import YarkonCard from "../components/YarkonCard";

import Blob1 from "../components/BackgroundBlobs/Blob1.js";

import Tilt from 'react-tilt';
import { pink } from "@material-ui/core/colors";


const Home = () => (
  <div className="card-container">
    <div className="d-lg-flex">
      <Tilt className="mx-0 mx-lg-5 pb-5 pb-lg-0" options={{ max : 10, scale: 1.02 }} >
        <GrafanaCard />
      </Tilt>
      <Tilt className="mx-0 mx-lg-5 pb-5 pb-lg-0" options={{ max : 10, scale: 1.02 }} >
        <YarkonCard />
      </Tilt>
    </div>
  </div>
);

export default Home;
