import { GET_DOGS } from "../actions/types";

const initialState = {
  dogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
