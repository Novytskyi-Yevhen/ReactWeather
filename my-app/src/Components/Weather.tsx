import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";

function Weather() {
  const currentWeather = useSelector((state) => state);
  return <ReactJson src={currentWeather} />;
}

export default Weather;
