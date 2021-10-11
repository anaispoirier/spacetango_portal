import React, {  useMemo } from 'react';
import { Group } from '@vx/group';
import genBins, { Bin, Bins } from '@vx/mock-data/lib/generators/genBins';
import { HeatmapCircle, HeatmapRect } from '@vx/heatmap';


import { scaleTime, scaleLinear } from '@vx/scale';

const cool1 = '#122549';
const cool2 = '#b4fbde';
const background = '#28272c';


const binData = genBins(/* length = */ 12, /* height = */ 12);

const width = 399;
const height = 240;

const x = d => new Date(d.date);
const y = d => d.close;

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
  return Math.min(...data.map(value));
}

// accessors
const bins = d => d.bins;
const count = d => d.count;

const colorMax = max(binData, d => max(bins(d), count));
const bucketSizeMax = max(binData, d => bins(d).length);

// scales
const xScale = scaleLinear({
  domain: [0, binData.length],
});
const yScale = scaleLinear({
  domain: [0, bucketSizeMax],
});
const rectColorScale = scaleLinear({
  range: [cool1, cool2],
  domain: [0, colorMax],
});
const opacityScale = scaleLinear({
  range: [0.1, 1],
  domain: [0, colorMax],
});

const margin = 3;

const xMax = width - margin;
const yMax = height - margin;

const binWidth = xMax / binData.length;
const binHeight = yMax / bucketSizeMax;

xScale.range([0, xMax]);
yScale.range([0, yMax]);


export default () => (

  
  <div>
    <svg width={width} height={height}>
    <Group top={1} left={margin} right={margin}>
        <HeatmapRect
          data={binData}
          xScale={xScale}
          yScale={yScale}
          colorScale={rectColorScale}
          opacityScale={opacityScale}
          binWidth={binWidth}
          binHeight={binHeight}
          gap={2}
        >
          {heatmap =>
            heatmap.map(heatmapBins =>
              heatmapBins.map(bin => (
                <rect
                  key={`heatmap-rect-${bin.row}-${bin.column}`}
                  className="vx-heatmap-rect"
                  width={bin.width}
                  height={bin.height}
                  x={bin.x}
                  y={bin.y}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                />
              )),
            )
          }
        </HeatmapRect>
      </Group>
    </svg>
  </div>
)