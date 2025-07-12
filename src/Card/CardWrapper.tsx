import React from "react";
import styled from "styled-components";

interface Stack {
  name: string;
}

interface Props {
  className?: string;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  subText?: string | JSX.Element;
  description?: string | JSX.Element;
  stack?: Stack[];
}

export const CardWrapper: React.FC<Props> = ({
  className,
  title,
  subtitle,
  subText,
  description,
  stack,
}) => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledCard className={className}>
          <StyledFlex>
            <StyledTitle className="title">{title}</StyledTitle>
            <StyledSubtext className="subtext">{subText}</StyledSubtext>
          </StyledFlex>
          <StyledSubtitle className="subtitle">{subtitle}</StyledSubtitle>
          <StyledDescription className="subscription">
            {description}
          </StyledDescription>
          {stack && (
            <StackContainer>
              {stack?.map((item) => (
                <StyledStack key={item.name}>{item.name}</StyledStack>
              ))}
            </StackContainer>
          )}
        </StyledCard>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  align-items: revert;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  // border: 1px solid #ff9b65;
  padding: 20px;
  width: 100%;
  height: auto;
  max-height: none;
  border-radius: 2px;
  transition: transform 0.3s ease;
  background: #222;
  gap: 10px;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.label`
  font-size: 18px;
  cursor: default;
  overflow: hidden;
`;

const StyledSubtitle = styled.label`
  color: black;
  font-size: 18px;
`;

const StyledSubtext = styled.label`
  color: black;
  font-size: 18px;
`;

const StyledDescription = styled.label`
  color: black;
  font-size: 14px;
`;

const StackContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  flex-wrap: wrap;
`;

const StyledStack = styled.div`
  background: #333;
  padding: 5px;
  border-radius: 8px;
  font-size: 14px;
  color: #ebecf3;
`;
