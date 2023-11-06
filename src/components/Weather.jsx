import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  //   const apiKey = process.env.REACT_APP_APIKEY;
  const apiKey = `46c6b1b665596cd990fda5f3ff09ea7f`;

  const apiCall = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.loc.value);
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });
    setCity(res.data.name);
  };

  return (
    <div>
      <form onSubmit={apiCall}>
        <input type="text" placeholder="city" name="loc" />
        <button>Search</button>
      </form>
      {weather && (
        <div>
          <p>Weather information for {city}</p>
          <p>Weather: {weather.descp}</p>
          <p>Temperature: {weather.temp} ℃</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Pressure: {weather.press} mb</p>
          <Modal modal={setCity}></Modal>
        </div>
      )}
    </div>
  );
}

export default Weather;
