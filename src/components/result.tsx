import WeatherData from "../types/weather";
import { Card, CardBody, CardTitle } from "reactstrap";


function Result({ weather }: {weather: WeatherData}) {
  const K2C = (temp_k: number) => (temp_k - 273.15).toPrecision(4);
  return (
          <Card>
            <CardBody>
              <CardTitle tag="h5">Weather for {weather.name}</CardTitle>
              <p>Feels Like: <strong>{K2C(weather.main.feels_like)}</strong></p>
              <p>Temp Max: <strong>{K2C(weather.main.temp_max)}</strong></p>
              <p>Temp Min: <strong>{K2C(weather.main.temp_min)}</strong></p>
              <p>Weather: <strong>{weather.weather[0].main}--{weather.weather[0].description}</strong></p>
            </CardBody>
          </Card>
  )
}

export default Result
