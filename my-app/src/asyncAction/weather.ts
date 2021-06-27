import { getWeatherAction } from "..";

export const fetchWeather = (city: string) => {
  return function (dispatch: any) {
    let appid = "cf7b383e88e9ac195f40ffafec636e5d";
    // let city: string = "New York";
    let data = { main: { temp: 2 } };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(getWeatherAction(result));
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          console.log(error);
        }
      );
  };
};
