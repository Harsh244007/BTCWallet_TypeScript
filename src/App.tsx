import React, { Suspense, useContext, useEffect } from "react";
import "./App.css";
import { HideLandingLoader } from "./Components/Common/Common";
import { MainContext } from "./Configs/Context/mainContext";
import { NavBar, Footer, Main } from "./Components";

const App: React.FC = () => {
  const { state, changeDevice, changeWidth, handleHeight } = useContext(MainContext)!;

  useEffect(() => {
    setTimeout(HideLandingLoader, 2000);

    const handleResize = () => {
      const width = window.innerWidth;
      changeWidth(window.innerWidth);
      if (width < 1022) changeDevice(0);
      else changeDevice(1);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [changeDevice, changeWidth]);

  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <NavBar />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <Main />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
