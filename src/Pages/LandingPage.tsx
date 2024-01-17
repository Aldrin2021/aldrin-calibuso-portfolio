import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { Loader } from "../Loader/Loader";

export const LandingPage: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      loginWithRedirect();
    } catch (error) {
      alert("Error logging in");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    navigate("/weather-forecast");
    return null;
  }

  return (
    <React.Fragment>
      <NavigationBar />
      <StyledContainer>
        <StyledTitle>Hello, World!</StyledTitle>
        <StyledSubtitle>
          Welcome to the Weather web application. Please login with your Github
          user to use the application and view the weather in you city
        </StyledSubtitle>
        <StyledButton onClick={handleLogin}>Log in</StyledButton>
      </StyledContainer>
    </React.Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  margin-top: 15rem;
  padding: 30px;

  @media (max-width: 768px) {
    margin-top: 10rem;
    padding: 20px;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledSubtitle = styled.h4`
  color: black;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledButton = styled.button`
  padding: 12px;
  background: #900b40;
  border: 1px solid #900b40;
  border-radius: 3px;
  width: 100%;
  max-width: 150px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s ease;
  cursor: pointer;
  float: left;

  &:hover {
    background: #c70039;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
`;
