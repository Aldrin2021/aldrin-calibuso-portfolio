import React from "react";
import picture from "../Images/aldrin.png";
import styled, { keyframes } from "styled-components";

export const ImageAnimation: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledImg src={picture} alt="self" />
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 500px;
  height: 500px;

  box-shadow: 0 0 60px rgba(64, 199, 150, 0.7);
  object-fit: cover;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease;
`;
