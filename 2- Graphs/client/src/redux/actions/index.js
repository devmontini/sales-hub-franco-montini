import axios from "axios";

//Get BUSINESS DETAIL DE PROFILE
export function getRestos() {
  return async function (dispatch) {
    try {
      const rest = await axios.get(`http://localhost:3001/restos`);
      return dispatch({
        type: "GET_REST",
        payload: rest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putUser(id, payload) {
  return async function (dispatch) {
    try {
      const rest = await axios.put(
        `http://localhost:3001/restos/${id}`,
        payload
      );
      return dispatch({
        type: "PUT_REST",
        payload: rest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getKm(id) {
  return async function (dispatch) {
    try {
      const rest = await axios.get(`http://localhost:3001/restos/${id}`);
      return dispatch({
        type: "GET_KM",
        payload: rest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createRest() {
  return async function (dispatch) {
    try {
      const rest = await axios.get(`http://localhost:3001`);
      return dispatch({
        type: "CREATE_REST",
        payload: rest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
