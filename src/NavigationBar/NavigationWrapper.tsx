import React from "react";
import { NavigationBar } from "./NavigationBar";

interface Props {
  activeSection?: string | boolean;
  scrollToSection: (id: string) => void;
}

export const NavigationWrapper: React.FC<Props> = ({
  activeSection,
  scrollToSection,
}) => {
  return (
    <>
      <NavigationBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </>
  );
};
