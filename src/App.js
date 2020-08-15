import React, { useState } from "react";
import { getWeather } from "./api/getWeather";
import "./App.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    // if (e.key === "Enter") {
    const data = await getWeather(query);
    setWeather(data);
    // setQuery("");
    // }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Enter City Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // onKeyPress={search}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit" onClick={search}>
          Submit
        </button>
        <button
          type="reset"
          onClick={() => {
            setQuery("");
            setWeather({});
          }}
        >
          Reset
        </button>
      </div>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg; C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
