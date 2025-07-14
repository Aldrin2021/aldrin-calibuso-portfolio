import React from "react";
import styled from "styled-components";
import { Download } from "../Button/Download";
import { ReactComponent as LinkedInIcon } from "../Images/Socials/linkedin.svg";
import { ReactComponent as GithubIcon } from "../Images/Socials/github.svg";

export const NavigationSocials: React.FC = () => {
  return (
    <React.Fragment>
      <StyledTop>
        <StyledUnorderedList>
          <StyledList>
            <a
              href="https://www.linkedin.com/in/aldrin-calibuso-9252602aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </StyledList>
          <StyledList>
            <a
              href="https://github.com/Aldrin2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </StyledList>
          <StyledList>
            <Download />
          </StyledList>
        </StyledUnorderedList>
      </StyledTop>
    </React.Fragment>
  );
};

const StyledTop = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  gap: 0.5rem;
  list-type-styles: none;
  padding: 20px;
`;

const StyledList = styled.li`
  pointer-events: bounding-box;

  :hover {
    transition: fill 0.2s ease-in;
    fill: #00ffff;
  }
`;
