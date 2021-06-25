import React, { useEffect, useState } from "react";
import ReactJson from 'react-json-view'

function Weather() {
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
