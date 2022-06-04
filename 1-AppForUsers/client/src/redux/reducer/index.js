const initialState = {
  users: [],
  user: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_MY_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
