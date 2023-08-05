import React, { useState } from "react";
import "./Card.css";
import { BsChevronCompactDown } from "react-icons/bs";
import BuysellButton from "../BuysellButton/BuysellButton";
import {SiBitcoinsv} from "react-icons/si"
const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  let BTC_PRICE="3.529020"
  return (
    <div className={`card ${expanded && "expanded"}`}>
      <div className="column-1">
        <div className="logo"><SiBitcoinsv/> Bitcoin</div>
        <div className="name">BTC</div>
      </div>
      <div className="column-2">{`${BTC_PRICE} BTC`}</div>
      <div className="column-3">
        <div className="price">{"$19.153 USD"}</div>
        <div className="percentage">{"-2.32%"}</div>
      </div>
      {expanded && (
        <div className="column-4">
          <BuysellButton />
        </div>
      )}
      <div
        className={`expand-button ${expanded && "buttonExpanded"}`}
        onClick={handleExpand}
      >
        <BsChevronCompactDown />
      </div>
    </div>
  );
};

export default React.memo(Card);
