
interface WeatherData{
  name: string,
  main: {
    feels_like: number,
    temp_max: number,
    temp_min: number,
  },
  weather: [{
    main: string,
    description: string
  }]
};

export default WeatherData
