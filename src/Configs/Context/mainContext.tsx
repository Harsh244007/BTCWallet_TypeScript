import React, { useReducer, createContext, ReactNode } from "react";

interface MainState {
  device: number;
  footerTab: number;
  navBarModal: boolean;
  cycleTab: number;
  innerWidth: number;
  innerHeight: number;

}
interface MainState {
  
}

type MainAction =
  | { type: "SWITCH_DEVICE"; payload: number }
  | { type: "SWITCH_FOOTER"; payload: number }
  | { type: "SWITCH_NAVBAR_MODAL"; payload: boolean }
  | { type: "SWITCH_CYCLE_TAB"; payload: number }
  | { type: "SWITCH_HEIGHT"; payload: number }
  | { type: "SWITCH_WIDTH"; payload: number };

const initialValue: MainState = {
  device: window.innerWidth < 1021 ? 0 : 1,
  footerTab: 0,
  navBarModal: false,
  cycleTab: 0,
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
};

const mainReducer = (state: MainState, action: MainAction): MainState => {
  switch (action.type) {
    case "SWITCH_DEVICE":
      return { ...state, device: action.payload };
    case "SWITCH_FOOTER":
      return { ...state, footerTab: action.payload };
    case "SWITCH_NAVBAR_MODAL":
      return { ...state, navBarModal: action.payload };
    case "SWITCH_CYCLE_TAB":
      return { ...state, cycleTab: action.payload };
    case "SWITCH_HEIGHT":
      return { ...state, innerWidth: action.payload };
    case "SWITCH_WIDTH":
      return { ...state, innerHeight: action.payload };
    default:
      return state;
  }
};

interface MainContextType {
  state?: MainState;
  changeDevice: (value: number) => void;
  changeFooterTab: (value: number) => void;
  handleNavbarModal: (value: boolean) => void;
  changeWidth: (value: number) => void;
  handleHeight: (value: number) => void;
  handleCycleTab: (value: number) => void;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

interface MainContextProviderProps {
  children: ReactNode;
}

const MainContextProvider: React.FC<MainContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialValue);

  const changeDevice = (value: number): void => {
    dispatch({ type: "SWITCH_DEVICE", payload: value });
  };

  const changeFooterTab = (value: number): void => {
    dispatch({ type: "SWITCH_FOOTER", payload: value });
  };

  const handleNavbarModal = (value: boolean): void => {
    dispatch({ type: "SWITCH_NAVBAR_MODAL", payload: value });
  };

  const changeWidth = (value: number): void => {
    dispatch({ type: "SWITCH_WIDTH", payload: value });
  };

  const handleHeight = (value: number): void => {
    dispatch({ type: "SWITCH_HEIGHT", payload: value });
  };

  const handleCycleTab = (value: number): void => {
    dispatch({ type: "SWITCH_CYCLE_TAB", payload: value });
  };

  return (
    <MainContext.Provider
      value={{
        state,
        changeDevice,
        changeFooterTab,
        changeWidth,
        handleHeight,
        handleNavbarModal,
        handleCycleTab,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
