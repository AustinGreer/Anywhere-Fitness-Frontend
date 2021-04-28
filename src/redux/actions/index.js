import axios from "axios";

export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS'
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE'

export const getClasses = () => {
    return (dispatch) => {
        dispatch({type: GET_CLASSES_START})
        axios
        .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_CLASSES_START,
                payload: res.data
            })
        })
    }
}