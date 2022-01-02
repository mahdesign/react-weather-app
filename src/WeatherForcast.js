import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Thus</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForcast-tempreture">
            <span className="WeatherForcast-tempreture-max">19°</span>
            <span className="WeatherForcast-tempreture-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
