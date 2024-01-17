import "./App.css";
import { WeatherApplicationPage } from "./Pages/WeatherApplicationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { WeatherResultsPage } from "./Pages/WeatherResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather-forecast" element={<WeatherApplicationPage />} />
        <Route
          path="/weather-forecast-result"
          element={<WeatherResultsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
