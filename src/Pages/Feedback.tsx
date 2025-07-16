import React from "react";
import { TestimonialCard } from "../Card/TestimonialCard";
import styled, { keyframes } from "styled-components";
import { feedback } from "../PagesHelpers/PagesHelpers";

export const Feedback: React.FC = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <StyledMainHeader
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-once="true"
          >
            Feedback<label>.</label>
          </StyledMainHeader>
          <ScrollWrapper
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Track>
              {[...feedback, ...feedback].map((item, i) => (
                <TestimonialCard key={i} {...item} />
              ))}
            </Track>
          </ScrollWrapper>
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

const autoScroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledBox = styled.div`
  padding: 0 30px;
  margin: 40px;
  overflow: hidden;
  display: flex;
  width: auto;
  min-height: 100vh;
  height: auto;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 100px 20px;
  }
`;

const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fffffe;
  width: 100%;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  padding-bottom: 20px;
  flex-wrap: wrap;

  label {
    margin-left: 5px;
    color: #00ffff;
    font-size: inherit;
  }

  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    margin-left: 15px;
    background: #ffeee4;
    opacity: 0.3;
  }
`;

const ScrollWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 10px;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 40px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #111 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #111 0%, transparent 100%);
  }

  @media screen and (max-width: 768px) {
    &::before,
    &::after {
      background: none;
    }
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${autoScroll} 30s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;
