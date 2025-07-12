import { styled, keyframes } from "styled-components";
import { fadeInUp } from "../PagesHelpers/PagesHelpers";
import { Keyframes } from "styled-components/dist/types";

const AnimationWrapper = styled.div<{
  delay?: string;
  animationTime?: string;
}>`
  animation: ${fadeInUp} ${({ animationTime }) => animationTime || "1s"} ease;
  animation-delay: ${({ delay }) => delay || "0s"};
  animation-fill-mode: both;
`;

interface AnimationProps {
  children: React.ReactNode;
  delay?: string;
  animationTime?: string;
}

export const Animations: React.FC<AnimationProps> = ({
  children,
  delay,
  animationTime,
}) => {
  return (
    <AnimationWrapper delay={delay} animationTime={animationTime}>
      {children}
    </AnimationWrapper>
  );
};
