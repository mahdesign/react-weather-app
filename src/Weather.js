import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      tempreture: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "a710bd8bd76400c9658ef649d9e81728";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handelResponse);
  }
  function handelSubmit(event) {
    event.preventDefault();
    search();
  }
  function handelCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handelSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handelCityChange}
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </form>
      </div>
    );
  } else {
    search();
    return "Loading ....";
  }
}
