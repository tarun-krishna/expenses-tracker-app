import React from "react";
import { useForm } from "react-hook-form";
import TransactionList from "./TransactionList";
import { default as api } from "../redux/apiSlice";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();
  const onSubmit = async (data) => {
    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group ">
            <input
              className="form-input"
              type="text"
              placeholder="Salary, House Rent, etc... "
              {...register("name")}
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Savings" defaultValue>
              Savings
            </option>
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
          </select>
          <div className="input-group ">
            <input
              className="form-input"
              type="text"
              placeholder="Amount"
              {...register("amount")}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full rounded-lg">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <TransactionList />
    </div>
  );
};

export default Form;
