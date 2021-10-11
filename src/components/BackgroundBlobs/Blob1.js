import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.scss";
import blobs from "blobs";

const options = {
  complexity: 0.3,
  contrast: 0.6,
  guides: true,
  size: 1000,
  color: "hsl(6.13, 73.23%, 49.8%)",
  stroke: 0
};

const Background = ({ svg, fill }) => (
  <div>
    <svg viewBox="0 0 10 600" className="wheel">
      <defs>
        <radialGradient id="radial-gradient" cx="10%" fx="10%" fr="0%" r="80%" style={{ filter: "blur(1.5)" }}>
          <stop offset="20%" stop-color="#cfc4ff33" />
          {/* <stop offset="50%" stop-color="#ffffffaa" /> */}
          <stop offset="95%" stop-color="#27336F55" />
        </radialGradient>
      </defs>

      {
        // <Lines />
      }
      <g transform="translate(0,0)">
        <animated.path
          class="blob-gradient"
          d={svg}
          style={{ filter: "blur(30px)" }}
        />
      </g>
    </svg>
  </div>
);

function Blob() {
  const [blob, change] = useState(blobs.editable(options));

  console.log(blob.children[0].children[0].attributes.d);

  const props3 = useSpring({
    svg: blob.children[0].children[0].attributes.d,
    fill: blob.children[0].children[0].attributes.fill,
    config: { duration: 10000 }
  });

  console.log(props3.svg);

  useEffect(() => {
    change(blobs.editable(options));
    const interval = setInterval(() => {
      change(blobs.editable(options));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Background svg={props3.svg} fill={props3.fill} />
    </div>
  );
}

export default Blob;

