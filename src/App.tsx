import React, { useState } from "react";
import get from "axios"


import Input from "./components/input";
import Result from "./components/result";
import WeatherData from "./types/weather";
import Header from "./components/header";



function App() {
  const API_KEY = "396f873cb4dd8d867624ed6293b140b6";
  const [weather, setWeather] = useState<WeatherData>();
  const [city, setCity] = useState("pune");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(city);
    if (city === "") {
      console.log("City is blank string")
      return
    }
    get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((resp) => {
        setWeather(resp.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <>
      <Header />
      <br />
      <div className="container">
        <Input city={city} handleChange={handleChange} handleSubmit={handleSubmit} /> <br />
        { weather !== undefined &&
          <Result weather={weather} />
        }
      </div>
    </>
  )
}

export default App
