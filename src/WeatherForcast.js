import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "d555add632bb01853aca6eb671d72fd7";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
    return null;
  }
}
