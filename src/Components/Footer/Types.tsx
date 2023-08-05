import { ReactNode } from "react";

export interface MainContextType {
  state: {
    footerTab: number;
  };
  changeFooterTab: (tab: number) => void;
  }

export interface FooterProps {
  children?: ReactNode;
}
