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
  height: 100vh;
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
  margin: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    margin: 20px 0;
  }
`;

const StyledCard = styled.div`
  transition: transform 0.2s ease-in-out;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fffffe;
  flex: 1;
  padding-bottom: 20px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;

  label {
    margin-left: 2px;
    color: #00ffff;
    font-size: 80px;
  }

  &::before {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-right: 15px;
    background: #ffeee4;
    opacity: 0.3;
    max-width: auto;
  }

  @media screen and (max-width: 767px) {
    font-size: 36px;
    label {
      font-size: 36px;
    }
    &::before {
      margin-right: 10px;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCardWrapper = styled(CardWrapper)`
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
    letter-spacing: 1px;

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
