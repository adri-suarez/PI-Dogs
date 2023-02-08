import axios from "axios";
export const GET_DOGS = "GET_DOGS";

const getDogs = () => {
  return async function (dispatch) {
    let apiData = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_DOGS,
      payload: apiData.data,
    });
  };
};
