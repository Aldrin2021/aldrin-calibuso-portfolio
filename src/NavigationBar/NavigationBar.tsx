import React from "react";
import styled from "styled-components";
import { sections } from "../PagesHelpers/PagesHelpers";

interface Props {
  activeSection?: string | boolean;
  scrollToSection: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationBar: React.FC<Props> = ({
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <NavContainer>
      <NavList>
        {sections.map(({ id, label }) => (
          <NavItem key={id}>
            <StyledLink
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: #080808;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 50%;
  width: 100%;
`;

const NavItem = styled.li`
  flex: 1;
  width: 100%;
  display: flex;
`;

const StyledLink = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
  transform: rotate(360deg);
  text-decoration: none;
  color: white;
  opacity: 0.5;
  font-size: 17px;
  border-right: 3px solid transparent;
  padding: 16px;
  margin: 0;

  &.active {
    opacity: 1;
    border-right: 3px solid #00ffff;
    font-weight: 500;
    background-color: #111;
  }

  &:hover {
    opacity: 1;
    border-right: 3px solid #00ffff;
    background-color: #111;
    color: #ebecf3;
  }

  // @media (max-width: 768px) {
  //   writing-mode: horizontal-tb;
  //   transform: none;
  //   padding: 10px 20px;
  //   border: none;
  // }
`;
