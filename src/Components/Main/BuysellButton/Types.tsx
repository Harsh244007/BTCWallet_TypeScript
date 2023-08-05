import { ReactNode } from "react";

export interface MainContextType {
  state: {
    footerTab: number;
    // Add other relevant state properties here
  };
  changeFooterTab: (tab: number) => void;
  // Add other relevant methods here
}

export interface FooterProps {
  children?: ReactNode;
}
