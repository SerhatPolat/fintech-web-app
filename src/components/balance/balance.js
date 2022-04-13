import React from "react";
import incomingData from "../incoming/incomingData";
import expenseData from "../expense/expenseData";
import "./balance.css";

export default function Balance() {
  const { incomings } = incomingData;
  const { expenses } = expenseData;

  const totalIncoming = incomings.reduce(
    (total, currentValue) => (total = total + currentValue.amount),
    0
  );

  const totalExpense = expenses.reduce(
    (total, currentValue) => (total = total + currentValue.amount),
    0
  );

  const balance = totalIncoming - totalExpense;

  return (
    <div className="balanceDiv">
      <p className="yourBalanceHeader">YOUR BALANCE</p>
      <hr />
      <h1 className="balance">${balance}</h1>
    </div>
  );
}
