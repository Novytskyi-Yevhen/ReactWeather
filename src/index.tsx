import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Components/Weather";
import { Provider } from "react-redux";
import InputWeather from "./Components/Input";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

interface IAction {
  type: string;
  payload: any;
}

const defaultState = {
  timel: 'DefaultObject'
};


function reducer (state: any = defaultState, action: IAction) {
  switch (action.type) {
    case "Weather":
      return action.payload;
    default:
      return state;
  }
};

export const getWeatherAction = (payload: any) => ({type: "Weather", payload})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <InputWeather />
    <Weather />
  </Provider>,

  document.getElementById("root")
);
