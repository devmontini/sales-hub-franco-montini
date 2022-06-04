import axios from "axios";

//Get BUSINESS DETAIL DE PROFILE
export function getUsers() {
  return async function (dispatch) {
    try {
      const users = await axios.get(`http://localhost:3001/user`);
      return dispatch({
        type: "GET_USERS",
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUser(id) {
  return async function (dispatch) {
    try {
      const myUser = await axios.get(`http://localhost:3001/user/${id}`);
      return dispatch({
        type: "GET_MY_USER",
        payload: myUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
