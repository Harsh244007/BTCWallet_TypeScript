import React, { useContext } from "react";
import { MainContext } from "../../Configs/Context/mainContext";
import { FaWallet } from "react-icons/fa";
// @ts-ignore
import { AiFillCompass, AiTwotoneSetting } from "react-icons/ai";
// @ts-ignore
import { BsFillBellFill } from "react-icons/bs";
import "./Footer.css";
import { MainContextType, FooterProps } from "./Types";

const Footer: React.FC<FooterProps> = () => {
  const { state, changeFooterTab } = useContext<any>(MainContext)!;

  const FooterElements = [
    <FaWallet />,
    <AiFillCompass />,
    <BsFillBellFill />,
    <AiTwotoneSetting />,
  ];

  const handleOnChange = (value: number) => {
    changeFooterTab(value);
  };

  return (
    <div className="FooterMain">
      <div className="FooterSubMain">
        {FooterElements.map((comp, i) => (
          <button
            key={i}
            onClick={() => handleOnChange(i)}
            className={`footer-button ${i === state!.footerTab && "active-footer"}`}
          >
            {comp}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);
