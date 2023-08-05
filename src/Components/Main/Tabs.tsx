import React from "react";
import BuysellButton from "./BuysellButton/BuysellButton";
import Card from "./Cards/Card";
import CycleButtons from "./Cards/CycleTab";
import Charts from "./Charts/Charts";
import "./Main.css";

export const FirstTab: React.FC = () => {
  return (
    <>
      <Card />
      <CycleButtons />
      <Charts />
      <BuysellButton />
    </>
  );
};

export const SecondTab: React.FC = () => {
  return <div>Second Tab</div>;
};

export const ThirdTab: React.FC = () => {
  return <div>Third Tab</div>;
};

export const FourthTab: React.FC = () => {
  return <div>Fourth Tab</div>;
};
