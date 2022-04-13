import React from "react";
import "./incoming.css";

export default function IncomingDiv(props) {
  const { incoming } = props;
  return (
    <div className="greenDiv">
      <p className="incomingName">{incoming.name}</p>
      <p className="incomingAmount">+ ${incoming.amount}</p>
    </div>
  );
}
