import React from "react";
import "./expense.css";

export default function ExpenseDiv(props) {
  const { expense } = props;
  return (
    <div className="redDiv">
      <p className="expenseName">{expense.name}</p>
      <p className="expenseAmount">- ${expense.amount}</p>
    </div>
  );
}
