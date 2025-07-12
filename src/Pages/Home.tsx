import React from "react";
import { Download } from "../Button/Download";
import styled from "styled-components";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledDownload>
          <Download />
        </StyledDownload>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 80px 80px;

  @media screen and (max-width: 600px) {
    padding-left: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
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

  @media screen and (max-width: 600px) {
    font-size: 30px;
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

  @media screen and (max-width: 600px) {
    font-size: 20px;
    color: #00ffff;
  }
`;

const StyledDownload = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px 50px 0 0;
`;
