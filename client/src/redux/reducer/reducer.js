//import * as action from "../actions/types" (se me hace mas legible de la otra forma)
import {
  GET_DOGS,
  GET_TEMPS,
  CLEAN_STATE,
  CREATE_DOG,
  DOG_BY_NAME,
  DOG_DETAILS,
  FILTER_BY_CREATED,
  FILTER_BY_TEMP,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../actions/types";

const initialState = {
  dogs: [],
  dogDetail: [],
  temperaments: [],
  dogFilters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, dogFilters: action.payload };
    ///////////////////////////////////////////////////
    case GET_TEMPS:
      return { ...state, temperaments: action.payload };
    ///////////////////////////////////////////////////
    case DOG_BY_NAME:
      return { ...state, dogs: action.payload };
    ///////////////////////////////////////////////////
    case DOG_DETAILS:
      return { ...state, dogDetail: action.payload };
    ///////////////////////////////////////////////////
    case CREATE_DOG:
      return { ...state };
    ///////////////////////////////////////////////////
    case CLEAN_STATE:
      return { ...state, dogDetail: [] };
    ///////////////////////////////////////////////////
    case FILTER_BY_CREATED:
      let doggies = [...state.dogFilters];
      const filterIfCreated =
        action.payload == "created"
          ? doggies.filter((el) => el.created)
          : doggies.filter((el) => !el.created);

      return {
        ...state,
        dogs:
          action.payload == "any"
            ? [...state.dogFilters]
            : [...filterIfCreated],
      };
    ///////////////////////////////////////////////////
    case FILTER_BY_TEMP:
      let alldog = [...state.dogFilters];
      let filterDogs = [];

      if (action.payload === "any")
        return { ...state, dogs: alldog, dogFilters: alldog };

      for (var i = 0; i < alldog.length; i++) {
        let temperaments = alldog[i].temperament;

        if (temperaments.includes(action.payload)) {
          filterDogs.push(alldog[i]);
        }
      }

      if (filterDogs.length === 0) {
        console.log("no dogs");
      }

      return {
        ...state,
        dogs: [...filterDogs],
      };

    ///////////////////////////////////////////////////
    case ORDER_BY_NAME:
      const orderDoggies = [...state.dogs];
      const orderDirection =
        action.payload === "z-a"
          ? orderDoggies.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : orderDoggies.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: orderDirection,
      };
    ///////////////////////////////////////////////////
    case ORDER_BY_WEIGHT:
      const dogsToOrder = [...state.dogs];
      let sorted =
        action.payload === "heaviest"
          ? dogsToOrder.sort(function (a, b) {
              if (a.weightMax > b.weightMax) {
                return -1;
              }
              if (a.weightMax < b.weightMax) {
                return 1;
              }
              return 0;
            })
          : dogsToOrder.sort(function (a, b) {
              if (a.weightMax > b.weightMax) {
                return 1;
              }
              if (a.weightMax < b.weightMax) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sorted,
      };
    ///////////////////////////////////////////////////
    default:
      return { ...state };
  }
};

export default reducer;
