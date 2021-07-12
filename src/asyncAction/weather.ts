import { getWeatherAction } from "..";
import { appid } from "../settings";

export const fetchWeather = (city: string) => {
  return function (dispatch: any) {
    let data = { main: { temp: 2 } };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(getWeatherAction(result));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};
