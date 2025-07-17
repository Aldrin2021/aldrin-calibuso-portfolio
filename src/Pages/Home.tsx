import React from "react";
import styled from "styled-components";
import { NavigationSocials } from "../NavigationBar/NavigationSocials";
import myPic from "../Images/picture.png";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer
        data-aos="fade"
        data-aos-delay="200"
        data-aos-offset="0"
        data-aos-once="true"
      >
        <NavigationSocials />
        {/* <StyledImage src={myPic} /> */}
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
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: clamp(300px, 50vw, 1000px);
  height: auto;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: -1;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    opacity: 0.1;
    position: static;
    margin-top: 40px;
  }
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
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 120px;
  }
`;

const StyledTitle = styled.div`
  color: #ebecf3;
  font-size: clamp(2rem, 6vw, 15rem);
  font-weight: 900;
  letter-spacing: 2px;

  &::after {
    content: ".";
    color: #00ffff;
  }

  @media (max-width: 767px),
    screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
  }
`;

const StyledRole = styled.div`
  color: #ebecf3;
  font-weight: 100;
  font-size: clamp(1rem, 6vw, 2rem);

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
    text-align: center;
  }
`;
