import React, { useState } from "react";
import Chart from "react-apexcharts";
function AnalyticsTest() {
  const [state, setState] = useState({
    options: {
      colors: ["#00ff00", "#0000fc", "#ff00FF"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
      yaxis: {
        title: {
          text: "Count", // Add label for Y-axis
        },
      },
    },
    series: [
      {
        name: "active",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "non-active",
        data: [3, 60, 35, 80, 79, 70, 20, 81],
      },
      {
        name: "constant",
        data: [22, 30, 88, 34, 49, 44, 82, 26],
      },
    ],
  });
  return (
    <div className="App">
      <h1>
        React Charts Using{" "}
        <i class="" style={{ color: "brown" }}>
          React-Apexcharts
        </i>{" "}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="450"
          />
        </div>{" "}
      </div>
    </div>
  );
}
// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
export default AnalyticsTest;
