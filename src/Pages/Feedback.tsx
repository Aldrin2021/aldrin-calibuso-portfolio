import React, { useState } from "react";
import styled from "styled-components";
import { TestimonialCard } from "../Card/TestimonialCard";
import { feedback } from "../PagesHelpers/PagesHelpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export const Feedback: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            onSlideChange={(swiper: SwiperType) =>
              setActiveIndex(swiper.realIndex % feedback.length)
            }
            modules={[Autoplay, EffectCoverflow, Pagination]}
          >
            {[...feedback, ...feedback].map((item, i) => (
              <SwiperSlide
                key={i}
                className={i % feedback.length === activeIndex ? "active" : ""}
                style={{ width: "auto" }}
              >
                <TestimonialCard
                  {...item}
                  isBorder={
                    i % feedback.length === activeIndex % feedback.length
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollWrapper>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`;

const StyledBox = styled.div`
  padding: 0 30px;
  margin: 40px;
  overflow: visible;
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
  overflow: visible;
  padding-top: 20px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: visible;
    background: none !important;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    background: #222 !important;
    opacity: 5px;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #00ffff;
    opacity: 1;
    transform: scale(1.2);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 60px;
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

  @media screen and (max-width: 767px) {
    &::before,
    &::after {
      background: none;
    }
  }
`;
