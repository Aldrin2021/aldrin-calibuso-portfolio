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
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Close hamburger menu when activeSection changes
  React.useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  return (
    <>
      <NavigationBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};
