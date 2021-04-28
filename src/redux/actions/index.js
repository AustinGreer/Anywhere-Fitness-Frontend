import axios from "axios";

export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS'
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE'

export const getClasses = () => {
    return (dispatch) => {
        dispatch({type: GET_CLASSES_START})
        return (
            axios
            .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
            .then(res => {
                dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log({err})
            })
        )
    }
}