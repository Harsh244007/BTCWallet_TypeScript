import React, { useContext } from "react";
import { MainContext } from "../../Configs/Context/mainContext";
import "./Main.css";
import { FirstTab, SecondTab, ThirdTab, FourthTab } from "./Tabs";

const MainChart: React.FC = () => {
  const { state } = useContext(MainContext)!;

  const MainTabs = [<FirstTab />, <SecondTab />, <ThirdTab />, <FourthTab />];

  return (
    <div className="MainChart">
      <div className="ChartSubMain">
        {MainTabs.map((e, i) => {
          if (i !== state!.footerTab) return null;
          return <div className="firstTabMain" key={i}>{e}</div>;
        })}
      </div>
    </div>
  );
};

export default React.memo(MainChart);
