import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const NavigationBar: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const logOutHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <StyledMainNavigation>
      <StyledUnorderedList>
        <StyledList>Weather Forecast</StyledList>
        <StyledList>
          {isAuthenticated && (
            <Button
              onClick={logOutHandler}
              label="Log out"
              customStyles={{ background: "none", cursor: "pointer" }}
            />
          )}
        </StyledList>
      </StyledUnorderedList>
    </StyledMainNavigation>
  );
};

const StyledMainNavigation = styled.nav`
  background: #900b40;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledList = styled.li`
  float: left;
  font-size: 25px;
  font-family: Optima, sans-serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
