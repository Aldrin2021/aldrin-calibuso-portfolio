// Fetching weather's API
// Function helper for 2nd page - WeatherApplicationPage.tsx
export const getWeather = async (
  navigate: any,
  currentDate: any,
  isAuthenticated: any,
  city: any,
  apiKey: any
) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("No data found");
    }

    const weatherResult = await response.json();
    navigate("/weather-forecast-result", {
      state: {
        weatherData: weatherResult,
        currentDate: currentDate,
        isAuthenticated: isAuthenticated,
      },
    });
  } catch (error) {
    alert("Please input correct city");
  }
};

// Gets user's github link
export const getGitHubInfo = (user: any) => {
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

// Gets current date
// Formatted date: MM/DD/YYYY
export const getCurrentDate = (now: any) => {
  return now.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
