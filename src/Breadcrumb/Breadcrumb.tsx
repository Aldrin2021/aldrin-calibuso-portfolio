import React from "react";
import { keyframes, styled } from "styled-components";
import { Button } from "../Button/Button";
import { Animations } from "../Animations/Animations";
import { sections } from "../PagesHelpers/PagesHelpers";

interface Props {
  activeSection?: string | boolean;
  scrollToSection: (id: string) => void;
  isVisible: boolean;
}

export const Breadcrumb: React.FC<Props> = ({
  activeSection,
  scrollToSection,
  isVisible,
}) => {
  // const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <StyledMainNavigation
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      {/* <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </HamburgerButton> */}
      <StyledUnorderedList>
        {sections.map(({ id, label }, index) => (
          <StyledList key={id} isActive={activeSection === "home"}>
            <Animations delay={`${0.1 * (index + 1)}s`}>
              <StyledButton
                active={activeSection === id}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </StyledButton>
            </Animations>
          </StyledList>
        ))}
      </StyledUnorderedList>
    </StyledMainNavigation>
  );
};

const StyledMainNavigation = styled.nav`
  z-index: 999;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex: auto;
  padding: 0;
  align-content: center;
  align-items: center;
`;

const StyledList = styled.li<{ isActive: boolean | string }>`
  color: ${({ isActive }) => (isActive === "home" ? "#FF9B65" : "#fffffe")};
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "/";
    color: #888;
    margin-left: 8px;
    display: inline-block;
    line-height: 1;
  }

  &:last-child::after {
    content: "";
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 18px;

    &::after {
      content: "";
      margin: 0;
    }
  }
`;

// const HamburgerButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   font-size: 2rem;
//   color: white;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

const StyledButton = styled(Button).attrs({ as: "button" })<{
  active: boolean;
}>`
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  position: relative;
  font-weight: bold;

  color: ${({ active }) => (active ? "#FF9B65" : "#abd1c6")};
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;

  transition: color 0.3s ease, transform 0.1s ease;

  &:hover {
    color: #ff9b65;
  }

  &:active {
    transform: scale(0.97);
  }
`;
