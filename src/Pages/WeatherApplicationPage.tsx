import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "../axiosConfig";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const WeatherApplicationPage: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [city, setCity] = React.useState<any>("");
  const [currentDate, setCurrentDate] = React.useState<any>("");

  const apiKey = "eb95f8cf2e8b1e1ba3f2e33e6abd972d";

  React.useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  const onChangeHandler = (e: any) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`/weather?q=${city}&appid=${apiKey}`);
      if (response.data) {
        navigate("/weather-forecast-result", {
          state: {
            weatherData: response.data,
            currentDate: currentDate,
            isAuthenticated: isAuthenticated,
          },
        });
      }
    } catch (error) {
      alert("Error fetching weather data");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const getGitHubInfo = () => {
    if (user) {
      const githubPageUrl = `https://github.com/${user.nickname}`;
      return (
        <p>
          <a href={githubPageUrl} target="_blank" rel="noreferrer">
            {githubPageUrl}
          </a>
        </p>
      );
    }
    return null;
  };

  return (
    <>
      {isAuthenticated && (
        <>
          <NavigationBar />
          <StyledInfoContainer>
            <StyledName>Hello, {user?.nickname}</StyledName>
            <StyledSocialInfo>{getGitHubInfo()}</StyledSocialInfo>
            <StyledInput
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={onChangeHandler}
            />
            <Button
              onClick={fetchWeather}
              disabled={city.trim() === ""}
              label="Display Weather"
              customStyles={{
                color: "white",
                padding: "10px",
                background: "#900b40",
                borderRadius: "3px",
                transition: "0.3s",
                fontSize: "15px",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "170px",
              }}
              customHoverStyles={{ background: "#c70039" }}
            />
          </StyledInfoContainer>
        </>
      )}
    </>
  );
};

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  border-radius: 0 50px 0 50px;
`;

const StyledName = styled.h3`
  color: black;
`;

const StyledSocialInfo = styled.a`
  &:hover {
    color: grey;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #900b40;
  width: 100%;
  max-width: 300px;

  &:focus {
    border-color: #c70039;
    outline: none;
    border-radius: 3px;
  }
`;
