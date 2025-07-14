import React from "react";
import styled from "styled-components";
import { NavigationSocials } from "../NavigationBar/NavigationSocials";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <NavigationSocials />
        <StyledContent>
          <StyledTitle>Hello, I'm Aldrin</StyledTitle>
          <StyledRole>
            I'm a <label>Frontend Web Developer</label>
          </StyledRole>
        </StyledContent>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  padding: 0 80px 150px 300px;

  @media (max-width: 767px) {
    display: flex;
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 120px;
  }
`;

const StyledTitle = styled.div`
  color: #ebecf3;
  font-size: 105px;
  font-weight: 900;
  letter-spacing: 2px;

  &::after {
    content: ".";
    color: #00ffff;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    padding: 0;
    text-align: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 60px;
  }
`;

const StyledRole = styled.div`
  color: #ebecf3;
  font-weight: 100;
  font-size: 40px;

  label {
    font-weight: 600;
    color: #00ffff;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    color: #00ffff;
    text-align: center;
    font-weight: 300;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
`;
