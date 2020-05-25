import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherTable = ({ weatherInfo }) => {
  return (
    <div>
      <h2>Weather in {weatherInfo.location.name}</h2>
      <p>temperate: {weatherInfo.current.temperature}</p>
      <img
        src={weatherInfo.current.weather_icons[0]}
        alt={"weather icon"}
        height="100"
      />
      <p>
        wind: {weatherInfo.current.wind_speed} mph direction{" "}
        {weatherInfo.current.wind_dir}
      </p>
    </div>
  );
};

const Weather = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [isLoaded, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
      )
      .then((response) => {
        setWeatherInfo(response.data);
        setLoading(true);
      });
  }, [city, apiKey]);

  return <div>{isLoaded && <WeatherTable weatherInfo={weatherInfo} />}</div>;
};

export default Weather;
