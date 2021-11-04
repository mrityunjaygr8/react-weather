import WeatherData from "../types/weather";

function Result({ weather }: {weather: WeatherData}) {
  const K2C = (temp_k: number) => (temp_k - 273.15).toPrecision(4);
  return (
        <div>
          <p>Feels Like: <strong>{K2C(weather.main.feels_like)}</strong></p>
          <p>Temp Max: <strong>{K2C(weather.main.temp_max)}</strong></p>
          <p>Temp Min: <strong>{K2C(weather.main.temp_min)}</strong></p>
          <p>Weather: <strong>{weather.weather[0].main}--{weather.weather[0].description}</strong></p>
        </div>
  )
}

export default Result
