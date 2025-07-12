import React, { useEffect } from "react";
import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
      easing: "ease",
    });
  }, []);

  return <LandingPage />;
}

export default App;
