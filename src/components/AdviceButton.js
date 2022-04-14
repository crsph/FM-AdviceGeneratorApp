import React from "react";
import "./AdviceButton.scss";
import { ReactComponent as ButtonIcon } from "../assets/icon-dice.svg";

export default function AdviceButton(props) {
  return (
    <button className="generate-advice-button" onClick={props.onClick}>
      <ButtonIcon />
    </button>
  );
}
