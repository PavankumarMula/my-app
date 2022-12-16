import React from "react";
import ChartBar from "./chartBar";
import "./chart.css";
const Chart = (props) => {
  const allValues = props.BarGraph.map((obj) => obj.value);
  let maximumValue = Math.max(...allValues);
  return (
    <div className="chart">
      {props.BarGraph.map((DataPoint) => {
        return (
          <ChartBar
            key={DataPoint.label}
            value={DataPoint.value}
            maxvalue={maximumValue}
            label={DataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
