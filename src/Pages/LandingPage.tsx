import React, { useState, useEffect } from "react";
import { NavigationWrapper } from "../NavigationBar/NavigationWrapper";
import { sections } from "../PagesHelpers/PagesHelpers";

import styled from "styled-components";
import { Download } from "../Button/Download";
import { About } from "./About";
import { SectionLabel } from "../SectionLabel/SectionLabel";
import { Experiences } from "./Experiences";
import { Home } from "./Home";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { Contact } from "./Contact";

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string | boolean>(
    "home"
  );
  const [manualActive, setManualActive] = React.useState<string | null>(null);

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

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

const StyledFirstSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 30% 0 30% 0;
  padding-left: 50px;
  grid-row: 2 / span 1;
`;

const StyledTitle = styled.label`
  color: #fffffe;
  font-size: 50px;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledFirstSubHeader = styled.div`
  font-size: 25px;
  grid-column: 1;
  color: #a7a9be;
`;

const StyledFirstDescription = styled.div`
  grid-column: 1;
`;

const StyledSubHeader = styled.label`
  color: #abd1c6;
  font-size: 14px;
`;

const StyledDownload = styled.div`
  margin-top: 20px;
`;
