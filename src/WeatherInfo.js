import React from "react";
import FormmatedDate from "./FormmatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempreture from "./WeatherTempreture";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormmatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-start">
              <WeatherTempreture celsius={props.data.tempreture} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
