import axios from "axios";

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
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";


// authentication actions
export const addUser = (newUser) => (dispatch) => {
  axios
    .post('https://tt-33-anywhere-fitness.herokuapp.com/auth/register', newUser)
    .then(res => {
      dispatch({type:SIGN_UP_SUCCESS, payload: res.data[0]})
    })
    .catch(err => {
      console.log({err})
    })
}

export const logOut = () => {
  return {type: LOG_OUT_SUCCESS, payload: false}
}


// classes actions
export const addClasses = (newClass) => (dispatch) => {
  dispatch({ type: ADD_CLASSES_START });
  axios
    .post("https://tt-33-anywhere-fitness.herokuapp.com/api/classes", newClass)
    .then((res) => {
      dispatch({
        type: ADD_CLASSES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getClasses = () => {
  return (dispatch) => {
    dispatch({ type: GET_CLASSES_START });
    return axios
      .get("https://tt-33-anywhere-fitness.herokuapp.com/api/classes")
      .then((res) => {
        dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CLASSES_FAILURE, payload: err.message });
      });
  };
};

export const getClassInfo = (id) => (dispatch) => {
  dispatch({ type: GET_CLASSES_START });
  return axios
    .get(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${id}`)
    .then((res) => {
      dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editClasses = (id, editClass) => (dispatch) => {
  dispatch({ type: EDIT_CLASSES_START });
  return axios
    .put(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${id}`, editClass)
    .then((res) => {
        dispatch({type: EDIT_CLASSES_SUCCESS, payload: res.data})
    })
    .catch((err) => dispatch({
        type: EDIT_CLASSES_FAILURE,
        payload: err.message
    }));
};

export const deleteClasses = (id) => (dispatch) => {
  dispatch({ type: DELETE_CLASSES_START });
  return axios
    .delete(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_CLASSES_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log(err);
    });
};