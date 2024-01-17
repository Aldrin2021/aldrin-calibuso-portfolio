import { styled } from "styled-components";

export const Loader: React.FC = () => {
  return <StyledSpan />;
};

const StyledSpan = styled.span`
  width: 100px;
  height: 100px;
  border: 8px solid #900b40;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: flex;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
  margin: 22rem auto;
  justify-content: center;
  align-items: center;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
