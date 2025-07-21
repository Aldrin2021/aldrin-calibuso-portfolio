import styled from "styled-components";
import { useSections } from "../PagesHelpers/PagesHelpers";
import React from "react";
import { Download } from "../Button/Download";

interface Props {
  activeSection?: string | boolean;
  scrollToSection: (id: string) => void;
}

export const NavigationMobile: React.FC<Props> = ({
  activeSection,
  scrollToSection,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const sections = useSections();
  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledMobileNavContainer activeSection={activeSection === "home"}>
      <StyledTopBar>
        <StyledButtonBurger onClick={toggleNavigation} isOpen={isOpen}>
          <span />
          <span />
          <span />
        </StyledButtonBurger>
        <Download />
      </StyledTopBar>
      <StyledMobileUnList isOpen={isOpen} aria-expanded={isOpen}>
        {sections.map(({ id, label }) => (
          <StyledMobileList key={id}>
            <StyledLink
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
                setIsOpen(false);
              }}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </StyledLink>
          </StyledMobileList>
        ))}
      </StyledMobileUnList>
    </StyledMobileNavContainer>
  );
};

const StyledMobileNavContainer = styled.div<{ activeSection: boolean }>`
  position: fixed;
  width: 100%;
  background: #333;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  box-sizing: border-box;
`;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001; /* Above the menu */
`;

const StyledButtonBurger = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(40deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-40deg)" : "rotate(0)")};
    }
  }

  &:hover span {
    background: #00ffff;
  }
`;

const StyledMobileUnList = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: ${({ isOpen }) => (isOpen ? "calc(100vh - 60px)" : "0")};
  background: #333;
  list-style: none;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: max-height 0.4s ease, opacity 0.4s ease;
  z-index: 999;
`;

const StyledMobileList = styled.li`
  color: #ebecf3;
  margin: 0 15px;
`;

const StyledLink = styled.a`
  color: #ebecf3;
  text-decoration: none;
  font-size: 18px;
  border: 2px solid #444;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s ease;

  &.active {
    font-weight: bold;
    border-bottom: 1px solid #00ffff;
    border-radius: 10px;
    color: #00ffff;
  }

  &:hover {
    color: #00ffff;
  }
`;
