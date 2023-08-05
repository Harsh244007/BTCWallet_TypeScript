import React, { useContext } from "react";
import "./Card.css";
import { MainContext } from "../../../Configs/Context/mainContext";

const CycleButtons: React.FC = () => {
  const { state, handleCycleTab } = useContext(MainContext)!;

  interface CycleData {
    label: string;
    value: number;
  }

  const cycleData: CycleData[] = [
    { label: "Day", value: 0 },
    { label: "Week", value: 1 },
    { label: "Month", value: 2 },
    { label: "Year", value: 3 },
  ];

  const handleCycleTabChange = (value: number) => {
    handleCycleTab(value);
  };

  return (
    <div className="cycle-buttons-container">
      {cycleData.map((item) => (
        <button
          key={item.value}
          onClick={() => handleCycleTabChange(item.value)}
          className={state!.cycleTab === item.value ? "active" : ""}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default CycleButtons;
