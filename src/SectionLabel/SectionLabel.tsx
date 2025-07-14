import React from "react";
import styled from "styled-components";

interface Props {
  sectionTitle: string;
}

export const SectionLabel: React.FC<Props> = ({ sectionTitle }) => {
  return (
    <React.Fragment>
      <StyledTitleLabel
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="0"
        data-aos-once="true"
      >
        <span>{sectionTitle}</span>
      </StyledTitleLabel>
    </React.Fragment>
  );
};

const StyledTitleLabel = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 25px 0 10px 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffeee4;
    z-index: 0;
    opacity: 0.3;
  }

  span {
    position: relative;
    z-index: 1;
    background-color: #1a1a1a;
    color: #fffffe;
    font-size: 24px;
    font-weight: bold;
    padding: 0 12px;
  }
`;
