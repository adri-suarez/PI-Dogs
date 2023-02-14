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
  dogCreated: [],
  dogFilters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
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
      return { ...state, dogs: [] };
    ///////////////////////////////////////////////////
    case FILTER_BY_CREATED:
      return 
    ///////////////////////////////////////////////////
    default:
      return { ...state };
  }
};

export default reducer;
