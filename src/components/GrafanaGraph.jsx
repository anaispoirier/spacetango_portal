import React, {  useMemo } from 'react';
import { appleStock } from '@vx/mock-data';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import { extent, max } from 'd3-array';
import { Grid } from '@vx/grid';

export const background = '#3b6978';
export const background2 = '#204051';
export const accentColor = '#edffea';
export const accentColorDark = '#75daad';

const all_data = appleStock;
const data = all_data.slice(800, all_data.length)
const stock = appleStock.slice(800);

const width = 400;
const height = 240;

const x = d => new Date(d.date);
const y = d => d.close;

const getDate = (d) => new Date(d.date);
const getStockValue = (d) => d.close;

// Bounds
const margin = {
  top: 60,
  bottom: 0,
  left: 0,
  right: 0,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;




const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)],
});

export default () => (

  
  <div>
    {/* {console.log(data)} */}
    <svg width={width} height={height}>
      <LinearGradient id="area-background-gradient" from={background} to={background2} />
      <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.1} />
      <Grid
        xScale={xScale}
        yScale={scaleLinear({
                  range: [yMax + 60, 0],
                  domain: [0, max(data, y)],
                })}
        width={xMax}
        height={yMax + 60}
        strokeDasharray="3,3"
        strokeOpacity={0.2}
        numTicksRows={5}
        numTicksColumns={4}
      />

      <Group top={margin.top} left={margin.left}>
      {console.log(data)}
        <AreaClosed
          data={data}
          x={d => xScale(getDate(d))}
          y={d => yScale(getStockValue(d))}
          yScale={yScale}
          fill={"url(#area-gradient)"}
          stroke={""}
        />

      </Group>
    </svg>
  </div>
)