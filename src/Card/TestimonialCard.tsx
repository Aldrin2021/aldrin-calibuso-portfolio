import React from "react";
import styled from "styled-components";

interface Props {
  image?: string;
  svg?: string;
  feedbackContent?: string;
  feedbackAuthor?: string;
  feedbackRole?: string;
}

export const TestimonialCard: React.FC<Props> = ({
  image,
  svg,
  feedbackContent,
  feedbackAuthor,
  feedbackRole,
}) => {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <img src={image} alt="feedback-author" className="feedback-author" />
          <div className="top-quote">
            <img src={svg} alt="top-quote" />
          </div>
          <StyledTestimonial className="testimonial-content">
            <StyledTestimonialContent>
              {feedbackContent}
            </StyledTestimonialContent>
          </StyledTestimonial>
          <StyledTestimonialFooter>
            <StyledTestimonialAuthor>{feedbackAuthor}</StyledTestimonialAuthor>
            <StyledTestimonialRole>{feedbackRole}</StyledTestimonialRole>
          </StyledTestimonialFooter>
          <div className="bottom-quote">
            <img src={svg} alt="bottom-quote" />
          </div>
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 2rem;
`;

const StyledBox = styled.div`
  position: relative;
  background: #222;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  border-radius: 8px;

  .feedback-author {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    z-index: 2;
  }

  .testimonial-content {
    padding-top: 30px;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  .top-quote img {
    position: absolute;
    top: -30px;
    left: -20px;
    z-index: 1;
  }

  .bottom-quote img {
    position: absolute;
    bottom: -30px;
    right: -20px;
    z-index: 1;
  }

  .top-quote img {
    width: 60px;
    height: 60px;
    transform: scaleX(-1);
    pointer-events: none;
  }

  .bottom-quote img {
    width: 60px;
    height: 60px;
    transform: scaleY(-1);
    pointer-events: none;
  }
`;

const StyledTestimonial = styled.div`
  border-bottom: 1px solid #555;
  padding-bottom: 15px;
`;

const StyledTestimonialContent = styled.p`
  text-align: justify;
  font-weight: 200;
  font-size: 16px;
  color: #ebecf3;
`;

const StyledTestimonialFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const StyledTestimonialAuthor = styled.div`
  font-size: 18px;
`;

const StyledTestimonialRole = styled.div`
  font-size: 16px;
  color: #00ffff;
`;
