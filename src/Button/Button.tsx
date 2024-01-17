import { styled } from "styled-components";

interface Props {
  onClick: () => void;
  label: string;
  customStyles?: React.CSSProperties;
  customHoverStyles?: React.CSSProperties;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  onClick,
  label,
  customStyles,
  customHoverStyles,
  disabled,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
      customHoverStyles={customHoverStyles}
    >
      {label}
    </StyledButton>
  );
};

interface StyledButtonProps {
  customHoverStyles?: React.CSSProperties;
  customeStyles?: React.CSSProperties;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) =>
    props.disabled ? "grey" : props.customeStyles?.background} !important;
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "disabled" : "pointer")} !important;
  font-size: 20px;
  font-family: Optima, sans-serif;

  &&:hover {
    color: antiquewhite;
    background: ${(props) =>
      props.disabled ? "grey" : props.customHoverStyles?.background} !important;
  }
`;
