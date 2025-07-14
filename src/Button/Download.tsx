import React from "react";
import styled from "styled-components";

export const Download: React.FC = () => {
  return (
    <React.Fragment>
      <StyledButton
        href="/AldrinCalibuso_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </StyledButton>
    </React.Fragment>
  );
};

const StyledButton = styled.a`
  position: relative;
  overflow: hidden;
  background: none;
  color: #00ffff;
  text-align: center;
  padding: 15px 15px;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  display: inline-block;
  font-weight: 600;
  border: 1px solid #00ffff;
  transition: color 0.4s ease;
  border-radius: 3px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #00ffff;
    z-index: -1;
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #000;
  }

  @media (max-width: 767px) {
    padding: 8px 8px;
  }
`;
