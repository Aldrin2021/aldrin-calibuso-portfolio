import React from "react";
import styled from "styled-components";

export const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <StyledMainHeader
          // data-aos="fade-left"
          // data-aos-easing="ease-in-back"
          // data-aos-delay="300"
          // data-aos-offset="0"
          >
            Let's Connect
          </StyledMainHeader>
        </StyledBox>
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
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const StyledBox = styled.div`
  padding: 0 30px 0 30px;
  margin: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fffffe;
  flex: 1;
  padding-bottom: 20px;
  margin: 0;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 80px;
  font-weight: bolder;
  letter-spacing: 3px;

  &::before {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-right: 15px;
    background: #ffeee4;
    opacity: 0.3;
    max-width: auto;
    border: 1px solid red;
  }
`;
