import api from "../api";
import type from "../actions/constant";

export const initGetUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: type.GET_USER_REQUEST });
    api
      .fetchUsers()
      .then((users) => {
        dispatch(getUserSuccess(users));
      })
      .catch((error) => {
        dispatch(getUserFail(error));
      });
  };
};

export const getUserSuccess = (users) => {
  return { type: type.GET_USER_SUCCESS, payload: users };
};

export const getUserFail = (error) => {
  return { type: type.GET_USER_FAILED, payload: error };
};
