import React from "react";
import styled from "styled-components";
import { CardWrapper } from "../Card/CardWrapper";
import { experiences, firstStack } from "../PagesHelpers/PagesHelpers";

export const Experiences: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledMainHeader
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="0"
          data-aos-once="true"
        >
          Experience<label>.</label>
        </StyledMainHeader>

        <StyledFlex
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="0"
          data-aos-once="true"
        >
          {experiences.map(
            ({ label, title, subtext, subtitle, description }) => {
              const matchingStacks = firstStack.find(
                (item) => item.label === label
              );
              return (
                <StyledCard key={label}>
                  <StyledCardWrapper
                    title={title}
                    subText={subtext}
                    subtitle={subtitle}
                    description={description}
                    stack={matchingStacks?.stack}
                  />
                </StyledCard>
              );
            }
          )}
        </StyledFlex>
      </StyledBox>
    </StyledContainer>
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
  min-height: 100vh;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
  }
`;

const StyledBox = styled.div`
  padding: 0 30px;
  margin: 0 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    margin: 20px 0;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #fffffe;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  padding-bottom: 20px;
  width: 100%;

  label {
    margin-left: 5px;
    color: #00ffff;
    font-size: clamp(2.5rem, 6vw, 5rem);
  }

  &::before {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-right: 15px;
    background: #ffeee4;
    opacity: 0.3;
  }

  @media screen and (max-width: 767px) {
    &::before {
      margin-right: 10px;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const StyledCard = styled.div`
  transition: transform 0.2s ease-in-out;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledCardWrapper = styled(CardWrapper)`
  padding: 15px;

  .title {
    color: #fff5e4;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 1px;

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  .subtitle {
    font-size: 18px;
    color: #00ffff;
    font-weight: 300;

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  .subtext {
    font-size: 16px;
    color: #fff5e4;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
      font-size: 14px;
      text-align: center;
    }
  }

  .subscription {
    font-size: 16px;
    color: #fff5e4;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
