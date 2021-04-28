import axios from "axios";

export const GET_CLASSES = 'GET_CLASSES';

export const getClasses = () => {
    return (dispatch) => {
        axios
        .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
        .then(res => {
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            })
        })
    }
}