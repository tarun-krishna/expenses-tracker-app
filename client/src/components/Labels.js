import React from "react";
import { default as api } from "../redux/apiSlice";
import { getLabels } from "../helper/helper";
const Labels = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = getLabels(data, "type").map((item, index) => (
      <LabelComponent key={index} data={item}></LabelComponent>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }
  return <div>{Transactions}</div>;
};

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3 mb-5"
          style={{ background: data.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3>
    </div>
  );
}

export default Labels;
