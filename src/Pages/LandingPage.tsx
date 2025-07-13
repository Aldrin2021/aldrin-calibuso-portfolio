import React from "react";
import { NavigationWrapper } from "../NavigationBar/NavigationWrapper";
import { sections } from "../PagesHelpers/PagesHelpers";
import { About } from "./About";
import { Experiences } from "./Experiences";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Feedback } from "./Feedback";

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string | boolean>(
    "home"
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        if (activeSection !== "home") setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "about";

      for (const { id } of sections) {
        if (id === "home") continue;
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavigationWrapper
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experiences">
        <Experiences />
      </div>

      <div id="feedback">
        <Feedback />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
