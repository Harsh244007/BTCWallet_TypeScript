import React from "react";
import "./BuysellButton.css";
import { AiFillDollarCircle } from "react-icons/ai";

const buttonData = [
  { name: "Buy BTC", icon: <AiFillDollarCircle /> },
  { name: "Sell BTC", icon: <AiFillDollarCircle /> },
];

const BuysellButton = () => {
  return (
    <div className="big-buttons-container">
      {buttonData.map((button, index) => (
        <div key={index} className="big-button">
          <div className={`logo ${index ===0?"firstLogo":"lastLogo"}`}>{button.icon}</div>
          <div className="label">{button.name}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(BuysellButton);
