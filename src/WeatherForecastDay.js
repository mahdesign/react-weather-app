import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function maxTempreture() {
    let tempreture = Math.round(props.data.temp.max);
    return `${tempreture}°`;
  }
  function minTempreture() {
    let tempreture = Math.round(props.data.temp.min);
    return `${tempreture}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForcast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForcast-tempreture">
        <span className="WeatherForcast-tempreture-max">{maxTempreture()}</span>
        <span className="WeatherForcast-tempreture-min">{minTempreture()}</span>
      </div>
    </div>
  );
}
