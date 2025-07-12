import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string | boolean;
  isOnlyTitle?: boolean;
}

export const Card: React.FC<Props> = ({
  title,
  subtitle,
  description,
  image,
  isOnlyTitle,
}) => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledCard
          className="card"
          image={image}
          isOnlyTitle={isOnlyTitle || false}
        >
          <StyledRow>
            {image && typeof image === "string" && (
              <StyledImage src={image} alt={title} />
            )}
            <StyledTitle
              className="card-title"
              isOnlyTitle={isOnlyTitle || false}
            >
              {title}
            </StyledTitle>
          </StyledRow>

          {!isOnlyTitle && (
            <>
              <StyledSubtitle>{subtitle}</StyledSubtitle>
              <StyledContent>{description}</StyledContent>
            </>
          )}
        </StyledCard>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: transform 0.3s ease;
`;

const StyledCard = styled.div<{
  image?: string | boolean;
  isOnlyTitle: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: ${({ isOnlyTitle }) => (isOnlyTitle ? "40px" : "none")};
  border-radius: 40px;
  transition: transform 0.3s ease;

  .card-title {
    transition: transform 0.3s ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledTitle = styled.div<{ isOnlyTitle: boolean }>`
  color: #ebecf3;
  font-size: 15px;
  display: flex;
  flex-grow: 1;
  justify-content: ${({ isOnlyTitle }) => (isOnlyTitle ? "left" : "center")};
  align-items: center;
  cursor: default;
  overflow: hidden;
  color: 1px solid red;
`;

const StyledSubtitle = styled.div`
  color: #fffffe;
  font-size: 18px;
  border: 1px solid red;
`;

const StyledContent = styled.div`
  color: black;
  font-size: 14px;
`;
