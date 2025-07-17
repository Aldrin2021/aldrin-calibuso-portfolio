import React from "react";
import { NavigationWrapper } from "../NavigationBar/NavigationWrapper";
import { sections, useIsMobile } from "../PagesHelpers/PagesHelpers";
import { About } from "./About";
import { Experiences } from "./Experiences";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Feedback } from "./Feedback";
import { NavigationMobile } from "../NavigationBar/NavigationMobile";
import { Loader } from "../Loader/Loader";

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string | boolean>(
    "home"
  );
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const isMobile = useIsMobile();

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const headerOffset = 90;

    if (!section) return;

    const elementPosition =
      section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    if (isMobile) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isMobile ? (
            <NavigationMobile
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          ) : (
            <NavigationWrapper
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          )}

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
      )}
    </>
  );
};
