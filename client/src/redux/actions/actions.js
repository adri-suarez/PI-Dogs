import axios from "axios";
import { GET_DOGS, GET_TEMPS } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    let apiData = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_DOGS,
      payload: apiData.data,
    });
  };
};

export const getTemps = () => {
  return function (dispatch){
    fetch("http://localhost:3001/temperaments")
    .then((res) => res.json())
    .then((data) => dispatch({ type: GET_TEMPS, payload: data }));
  }
};
