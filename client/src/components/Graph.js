import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { default as api } from "../redux/apiSlice";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../helper/helper";

Chart.register(ArcElement);

export const Graph = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4 font-bold title">
            Total
            <p className="black text-3xl text-emerald-400">
              ${getTotal(data) ?? 0}
            </p>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels></Labels>
        </div>
      </div>
    </div>
  );
};

export default Graph;
