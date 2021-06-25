import React, { useEffect, useState } from "react";
import ReactJson from 'react-json-view'

function Weather() {
  const obj = {
    coord: {
      lon: 24.0232,
      lat: 49.8383,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    base: "stations",
    main: {
      temp: 297.36,
      feels_like: 297.74,
      temp_min: 297.36,
      temp_max: 300.66,
      pressure: 1014,
      humidity: 73,
    },
    visibility: 10000,
    wind: {
      speed: 5,
      deg: 130,
    },
    clouds: {
      all: 40,
    },
    dt: 1624614797,
    sys: {
      type: 1,
      id: 8909,
      country: "UA",
      sunrise: 1624587395,
      sunset: 1624646182,
    },
    timezone: 10800,
    id: 702550,
    name: "Lviv",
    cod: 200,
  };

  const [currentWeather, setCurrentWeather] = useState({});
  useEffect(() => {
    let appid = "cf7b383e88e9ac195f40ffafec636e5d";
    let city: string = "vienna";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCurrentWeather(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <ReactJson src = {currentWeather}/>
  );
}

export default Weather;
