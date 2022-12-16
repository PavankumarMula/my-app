import React from "react";
import "./chartBar.css";
const ChartBar = (props) => {
  let barfillcss = "0%";
  if (props.maxvalue > 0) {
    barfillcss = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barfillcss }}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};
export default ChartBar;
