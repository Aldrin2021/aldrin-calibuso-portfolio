import React from "react";
import styled from "styled-components";
import emailSuccessAnimation from "./email-success.json";
import Lottie from "lottie-react";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

export const EmailModal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <StyledContainer>
      <StyledBox>
        {children && (
          <>
            <LottieWrapper>
              <Lottie
                animationData={emailSuccessAnimation}
                loop={false}
                autoPlay
              />
            </LottieWrapper>

            <SuccessMessage>Message sent successfully!</SuccessMessage>
          </>
        )}
        <StyledCloseBTN>
          <button onClick={onClose}>CLOSE</button>
        </StyledCloseBTN>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  background-color: #333;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessMessage = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledCloseBTN = styled.div`
  button {
    background-color: none;
    color: #fff;
    border: 1px solid #00ffff;
    padding: 0.5rem 1.2rem;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #00ffff;
      color: #000;
    }
  }
`;

const LottieWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;
