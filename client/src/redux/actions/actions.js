import axios from "axios";
//import * as action from "./types" (se me hace mas legible de la otra forma)
import {
  GET_DOGS,
  GET_TEMPS,
  DOG_BY_NAME,
  DOG_DETAILS,
  CREATE_DOG,
  CLEAN_STATE,
  FILTER_BY_CREATED,
  FILTER_BY_TEMP,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./types";

//traer los perros, con axios y async
export const getDogs = () => {
  return async function (dispatch) {
    let apiData = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_DOGS,
      payload: apiData.data,
    });
  };
};

//traer las temps, con fetch
export const getTemps = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/temperaments")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_TEMPS, payload: data }));
  }; 
};

//traer dog by name con axios y then
export const getByName = (name) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs?name=${name}`)
      .then((res) => dispatch({ type: DOG_BY_NAME, payload: res.data }));
  };
};

//traer dog details por id, con axios y async
export const dogById = (id) => {
  return async function (dispatch) {
    const dog = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({ type: DOG_DETAILS, payload: dog.data });
  };
};

//creo un nuevo dog recibiendo el body y haciendo el post con axios
export const createDog = (newDogData) => {
  return async function (dispatch) {
    const postDog = await axios.post("http://localhost:3001/dogs/", newDogData);
    return dispatch({
      type: CREATE_DOG,
      payload: postDog.data,
    });
  };
};

//limpiar el estado anterior
export const cleanState = () => {
  return {
    type: CLEAN_STATE,
  };
};

//filtrar por creados en DB
export const filterByCreated = (payload) => {
  return {
    type: FILTER_BY_CREATED,
    payload,
  };
};

//filtrar por temperamentos
export const filterByTemps = (payload) => {
  return {
    type: FILTER_BY_TEMP,
    payload,
  };
};

//ordenar por nombre
export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

//ordernar por peso
export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};
