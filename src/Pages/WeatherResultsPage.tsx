import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { Button } from "../Button/Button";

export const WeatherResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const weatherData = location.state?.weatherData;
  const currentDate = location.state?.currentDate;
  const isAuthenticated = location.state?.isAuthenticated;

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  const previousPageHandler = () => {
    window.history.back();
  };

  if (!weatherData) {
    return null;
  }

  return (
    <React.Fragment>
      <NavigationBar />
      {weatherData && (
        <StyledResultContainer>
          <StyledTable>
            <StyledFirstHeaderRow>
              <th>Date</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </StyledFirstHeaderRow>
            <StyledSecondHeaderRow>
              <th>(mm/dd/yyyy)</th>
              <th>Temp(F)</th>
              <th>Description</th>
              <th>Main</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </StyledSecondHeaderRow>
            <tbody>
              <tr>
                <td>{currentDate}</td>
                <td>{weatherData?.main?.temp}</td>
                {weatherData?.weather?.map((weatherItem: any) => (
                  <td> {weatherItem.description}</td>
                ))}
                {weatherData?.weather?.map((weatherItem: any) => (
                  <td> {weatherItem.main}</td>
                ))}
                <td>{weatherData?.main?.pressure}</td>
                <td>{weatherData?.main?.humidity}</td>
              </tr>
            </tbody>
          </StyledTable>
        </StyledResultContainer>
      )}
      <StyledDiv>
        <Button
          onClick={previousPageHandler}
          label="Back"
          customStyles={{
            color: "white",
            padding: "15px",
            background: "#900b40",
            borderRadius: "3px",
            transition: "0.3s",
            fontSize: "15px",
            fontWeight: "bold",
            width: "auto",
            margin: "50px auto",
          }}
          customHoverStyles={{ background: "#c70039" }}
        />
      </StyledDiv>
    </React.Fragment>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

const StyledResultContainer = styled.div`
  margin-top: 15rem;

  @media (max-width: 768px) {
    overflow-x: auto;
  }

  table,
  th,
  td {
    border: 1px solid black;
    text-align: left;
    padding: 10px;
  }
`;

const StyledFirstHeaderRow = styled.tr`
  background: #900b40;
  color: white;
`;

const StyledSecondHeaderRow = styled.tr`
  background: #900b40;
  color: white;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
`;
