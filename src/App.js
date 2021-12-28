import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="http://mahsair.ir" href="_blank">
            Mahdesign
          </a>{" "}
          and is
          <a
            href="https://github.com/mahdesign/react-weather-app"
            target="_blank"
          >
            open source on github
          </a>
        </footer>
      </div>
    </div>
  );
}
