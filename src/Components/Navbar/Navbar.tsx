import React, { useContext } from "react";
import { MainContext } from "../../Configs/Context/mainContext";
import "./Navbar.css";
import NavBarHeader from "./NavBarHeader";
import NavBarModal from "./NavBarModal/NavBarModal";
const NavBarMobile: React.FC = () => {
  return <NavBarHeader />;
};

const NavBarDesktop: React.FC = () => {
  return <NavBarHeader />;
};

const NavBar: React.FC = () => {
  const context = useContext(MainContext);

  if (!context) {
    // Handle case where context is not available
    return null;
  }

  const { state } = context;

  return (
    <div className="NavBarMain">
      <div className="NavBarSubMain">
        {state?.device === 0 ? <NavBarMobile /> : <NavBarDesktop />}
      </div>
      <NavBarModal />
    </div>
  );
};

export default React.memo(NavBar);
