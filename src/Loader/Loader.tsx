import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export const Loader: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  React.useEffect(() => {
    // Simulate loading finish after 3 seconds, then start fade out
    const timer = setTimeout(() => setFadeOut(true), 1000);

    return () => clearTimeout(timer);
  }, []);

  return <StyledLoader fadeOut={fadeOut}>Loading...</StyledLoader>;
};

const load = keyframes`
  0% { left: 0; height: 30px; width: 15px; }
  50% { height: 8px; width: 40px; }
  100% { left: 235px; height: 30px; width: 15px; }
`;

const fadeOutAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const StyledLoader = styled.div<{ fadeOut?: boolean }>`
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: helvetica, arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: #00ffff;
  letter-spacing: 0.2em;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: #00ffff;
    position: absolute;
    animation: ${load} 0.7s infinite alternate ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      animation: ${fadeOutAnimation} 1.5s forwards;
    `}
`;
