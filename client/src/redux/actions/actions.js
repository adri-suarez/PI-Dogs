import axios from "axios";
import { GET_DOGS } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    let apiData = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_DOGS,
      payload: apiData.data,
    });
  };
};
