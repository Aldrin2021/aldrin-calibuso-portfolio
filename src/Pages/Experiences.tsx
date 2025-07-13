import React from "react";
import styled from "styled-components";
import { CardWrapper } from "../Card/CardWrapper";
import { experiences, firstStack } from "../PagesHelpers/PagesHelpers";

export const Experiences: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <StyledMainHeader
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
          >
            Experience<label>.</label>
          </StyledMainHeader>
          <StyledFlex
            data-aos="fade"
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
                  <StyledCard>
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
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  height: auto;
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

const StyledCard = styled.div`
  transition: transform 0.2s ease-in-out;
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
  margin: 0;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 80px;
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
`;

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
`;

const StyledCardWrapper = styled(CardWrapper)`
  .title {
    color: #fff5e4;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 18px;
    color: #00ffff;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .subtext {
    font-size: 16px;
    color: #fff5e4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .subscription {
    font-size: 16px;
    color: #fff5e4;
  }
`;
