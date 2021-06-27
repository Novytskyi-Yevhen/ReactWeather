import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../asyncAction/weather";

const InputWeather = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const getData = (str: string | null | undefined) => {
        dispatch({type: 'Weather', payload: str})
    }
  return (
    <Form inline>
      <Form.Label htmlFor="inlineFormInputName2" srOnly>
        city
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Enter the city"
        onChange = {(e) => setCity(e.target.value)}
      />
      <Button type = "button" className="mb-2" onClick ={() => dispatch(fetchWeather(city))}>
        Get weather data
      </Button>
    </Form>
  );
};

export default InputWeather;
