import axios from "axios";
import axiosWithAuth from '../../utils/axiosWithAuth';

export const ADD_CLASSES_START = "ADD_CLASSES_START";
export const ADD_CLASSES_SUCCESS = "ADD_CLASSES_SUCCESS";
export const ADD_CLASSES_FAILURE = "ADD_CLASSES_FAILURE";

export const DELETE_CLASSES_START = "DELETE_CLASSES_START";
export const DELETE_CLASSES_SUCCESS = "DELETE_CLASSES_SUCCESS";
export const DELETE_CLASSES_FAILURE = "DELETE_CLASSES_FAILURE";

export const GET_CLASSES_START = "GET_CLASSES_START";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";

export const EDIT_CLASSES_START = "EDIT_CLASSES_START";
export const EDIT_CLASSES_SUCCESS = "EDIT_CLASSES_SUCCESS";
export const EDIT_CLASSES_FAILURE = "EDIT_CLASSES_FAILURE";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG-IN-FAILURE";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";


// AUTHENTICATION ACTIONS

// post - creates a new user on the database
export const addUser = (newUser) => (dispatch) => {
  axios
    .post('https://tt-33-anywhere-fitness.herokuapp.com/auth/register', newUser)
    .then(res => {
      console.log(res)
      dispatch({type:SIGN_UP_SUCCESS, payload: res.data[0]})
    })
    .catch(err => {
      console.log({err})
    })
}

// post - allows an existing user to login
export const logIn = (newUser) => (dispatch) => {
  axios
    .post('https://tt-33-anywhere-fitness.herokuapp.com/auth/login', newUser)
    .then(res => {
      console.log(res)
      window.localStorage.setItem('token', res.data.token)
      dispatch({type: LOG_IN_SUCCESS, payload: {isLoggedIn: true, currentUser:res.data.data}})
    })
    .catch(err => {
      dispatch({type: LOG_IN_FAILURE, payload: {isLoggedIn: false, errors: err.message}})
    })
}

// this action allows for a user who is currently logged in to logout
export const logOut = () => {
  return {type: LOG_OUT_SUCCESS, payload: false}
}

// GYM CLASSES ACTIONS

// post - authenticated instructor can create a new class
export const addClasses = (newClass) => (dispatch) => {
  dispatch({ type: ADD_CLASSES_START });
  axiosWithAuth()
    .post(`classes`, newClass)
    .then((res) => {
      dispatch({
        type: ADD_CLASSES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// get - authenticated user can retrieve all gym classes
export const getClasses = () => {
  return (dispatch) => {
    dispatch({ type: GET_CLASSES_START });
    return axiosWithAuth()
      .get(`classes`)
      .then((res) => {
        dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CLASSES_FAILURE, payload: err.message });
      });
  };
};

// get - authenticated user can get specific information about a gym class by ID
export const getClassInfo = (id) => (dispatch) => {
  dispatch({ type: GET_CLASSES_START });
  return axiosWithAuth()
    .get(`classes/${id}`)
    .then((res) => {
      dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// put - authenticated instructor can edit current classes
export const editClasses = (id, editClass) => (dispatch) => {
  dispatch({ type: EDIT_CLASSES_START });
  return axiosWithAuth()
    .put(`classes/${id}`, editClass)
    .then((res) => {
        dispatch({type: EDIT_CLASSES_SUCCESS, payload: res.data})
    })
    .catch((err) => dispatch({
        type: EDIT_CLASSES_FAILURE,
        payload: err.message
    }));
};

// delete - authenticated instructor can delete a specific class
export const deleteClasses = (id) => (dispatch) => {
  dispatch({ type: DELETE_CLASSES_START });
  return axiosWithAuth()
    .delete(`classes/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_CLASSES_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log({err});
    });
};