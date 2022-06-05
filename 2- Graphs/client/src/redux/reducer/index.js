const initialState = {
  rest: [],
  km: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_REST":
      return {
        ...state,
        rest: action.payload,
      };
    case "GET_KM":
      return {
        ...state,
        km: action.payload,
      };
    case "PUT_REST":
      return {
        ...state,
      };
    case "CREATE_REST":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
