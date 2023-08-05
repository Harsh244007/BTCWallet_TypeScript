import { lazy } from "react";

const NavBar = lazy(()=> import("./Navbar"))
const Footer = lazy(()=> import("./Footer"))
const Main = lazy(()=> import("./Main"))


export {NavBar,Footer,Main}