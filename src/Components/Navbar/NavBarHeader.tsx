import React, { useContext } from "react";
import { MainContext } from "../../Configs/Context/mainContext";
import { FiChevronLeft } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

const NavBarHeader: React.FC = () => {
  const context = useContext(MainContext);

  if (!context) {
    // Handle case where context is not available
    return null;
  }

  const { state, handleNavbarModal } = context;

  return (
    <div className="NavBarHeaderMain">
      <button className="mainHeaderBackButton">
        <FiChevronLeft />
        {state!.device === 0 ? "" : "Back"}
      </button>
      <h2 className="mainHeaderName">Bitcoin Wallet</h2>
      <button
        className="mainHeaderMenuIcon"
        onClick={() => handleNavbarModal(!state!.navBarModal)}
      >
        <BiDotsVerticalRounded />
        {state!.device === 0 ? "" : "Menu"}
      </button>
    </div>
  );
};

export default React.memo(NavBarHeader);
