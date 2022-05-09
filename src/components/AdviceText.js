import React from "react";
import "./AdviceText.scss";

export default function AdviceText(props) {
  return (
    <div className="advice-text-container">
      <div className="advice-text-container__id">ADVICE #{props.id}</div>

      <h1 className="advice-text-container__quote">"{props.quote}"</h1>
    </div>
  );
}
