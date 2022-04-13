import React from "react";
import incomingData from "./incoming/incomingData";
import expenseData from "./expense/expenseData";

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

  return <h1>${balance}</h1>;
}
