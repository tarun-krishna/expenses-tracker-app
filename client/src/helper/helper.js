import _ from "lodash";

export const getSum = (transaction, type) => {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
};

export const getLabels = (transaction) => {
  let amountSum = getSum(transaction, "type");
  let totalAmount = _.sum(getSum(transaction));
  let percent = _(amountSum)
    .map((objs) =>
      _.assign(objs, { percent: (100 * objs.total) / totalAmount })
    )
    .value();
  return percent;
};

export const chart_Data = (transaction, custom) => {
  let dataValue = getSum(transaction);
  let background = _.map(transaction, (value) => value.color);
  background = _.uniq(background);
  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: background,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return custom ?? config;
};

export const getTotal = (transaction) => {
  return _.sum(getSum(transaction));
};
