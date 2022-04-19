import React, { useEffect, useState } from "react";
import "./AdviceView.scss";
import { GetAdvice } from "../api/AdviceAPI";
import AdviceText from "../components/AdviceText";
import AdviceButton from "../components/AdviceButton";
import { ReactComponent as PatternDivider } from "../assets/pattern-divider-desktop.svg";

export default function AdviceView() {
  const [adviceId, setAdviceId] = useState(0);
  const [adviceQuote, setAdviceQuote] = useState("");

  const getAdvice = async () => {
    const data = await GetAdvice().then((res) => res.data);
    setAdviceId(data.slip.id);
    setAdviceQuote(data.slip.advice);
  };

  useEffect(() => {
    getAdvice();
  });

  return (
    <div className="advice-generator-container">
      <AdviceText id={adviceId} quote={adviceQuote} />

      <PatternDivider />

      <AdviceButton onClick={getAdvice} />
    </div>
  );
}
