import React, { useEffect, useState } from "react";
import "./AdviceView.scss";
import { GetAdvice } from "../api/AdviceAPI";
import AdviceText from "../components/AdviceText";
import AdviceButton from "../components/AdviceButton";
import { ReactComponent as PatternDividerDesktop } from "../assets/pattern-divider-desktop.svg";
import { ReactComponent as PatternDividerMobile } from "../assets/pattern-divider-mobile.svg";

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
    <main>
      <div className="advice-generator-container">
        <AdviceText id={adviceId} quote={adviceQuote} />

        <PatternDividerMobile className="divider-mobile" />

        <PatternDividerDesktop className="divider-desktop" />

        <AdviceButton onClick={getAdvice} />
      </div>
    </main>
  );
}
