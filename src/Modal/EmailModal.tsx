import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

export const EmailModal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <StyledContainer>
      <StyledBox>
        {children && (
          <SuccessMessage>Message sent successfully!</SuccessMessage>
        )}
        <StyledCloseBTN>
          <button onClick={onClose}>CLOSE</button>
        </StyledCloseBTN>
      </StyledBox>
    </StyledContainer>
  );
};

// Overlay
const StyledContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal content
const StyledBox = styled.div`
  background-color: #ebecf3;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Message text
const SuccessMessage = styled.div`
  color: green;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

// Close button
const StyledCloseBTN = styled.div`
  button {
    background-color: #d9534f;
    color: #fff;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c9302c;
    }
  }
`;
