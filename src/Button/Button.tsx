import { styled } from "styled-components";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  label?: string;
  customStyles?: React.CSSProperties;
  customHoverStyles?: React.CSSProperties;
  disabled?: boolean;
  active?: boolean;
  isRole?: boolean;
  isActiveSection?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  label,
  customStyles,
  customHoverStyles,
  disabled,
  active,
  isRole,
  isActiveSection,
}) => {
  return (
    <StyledButton
      className="button"
      active={active}
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
      customHoverStyles={customHoverStyles}
      isRole={isRole}
      isActiveSection={isActiveSection}
    >
      {label || children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  children: React.ReactNode;
  customHoverStyles?: React.CSSProperties;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
  active?: boolean;
  isRole?: boolean;
  isActiveSection?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  background: ${(props) => (props.active ? "#00ffff" : "none")};
  color: ${(props) => (props.isActiveSection ? "#FF9B65" : "white")};
  border: none;
  cursor: ${(props) => (props.disabled ? "disabled" : "pointer")} !important;
  font-size: 14px;
  padding: 8px;
  transition: background 0.3s ease-in-out;
  font-weight: bold;

  ${(props) =>
    props.active &&
    `
    color: #000;
  `}

  &:hover {
    background: ${(props) =>
      props.isActiveSection ? "none" : props.isRole ? "#00ffff" : "none"};
    color: ${(props) =>
      props.isActiveSection ? "#FF9B65" : props.isRole ? "#000" : "#FF9B65"};
  }
`;
