import React from "react";
import LetSchedule from "./LetSchedule";
import WhyUsPro from "./WhyUsPro";
import Process from "./Process";
import ProCovient from "./ProCovient";
import ProDeliver from "./ProDeliver";
import ProPack from "./ProPack";
import ProSchedule from "./ProSchedule";

const Processes = () => {
  return (
    <div>
      <Process />
      <ProSchedule />
      <div className="divider"></div>
      <ProPack />
      <div className="divider"></div>
      <ProDeliver />
      <div className="divider"></div>
      <ProCovient />
      <WhyUsPro />
      <LetSchedule />
    </div>
  );
};

export default Processes;
