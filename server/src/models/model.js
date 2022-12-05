const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Categories
const categories_model = new Schema({
  type: {
    type: String,
    default: "Investment",
  },
  color: {
    type: String,
    default: "#FCBE44",
  },
});

//Transactions
const transaction_model = new Schema({
  name: {
    type: String,
    default: "Anonymous",
  },
  type: {
    type: String,
    default: "Invaestment",
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Categories = mongoose.model("categories", categories_model);
const Transaction = mongoose.model("transactions", transaction_model);

exports.default = Transaction;

module.exports = {
  Categories,
  Transaction,
};
