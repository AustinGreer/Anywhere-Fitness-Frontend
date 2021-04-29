import { ADD_CLASSES_START, ADD_CLASSES_SUCCESS, GET_CLASSES_START, GET_CLASSES_SUCCESS } from '../actions'

const initialState = {
    classes: [],
    isLoggedin:false,
    loading: false,
    errors: false,
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case GET_CLASSES_START:
            return {
                ...state,
                loading: true,
                errors: false
            }
        case GET_CLASSES_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                loading: false,
                errors: false
            }
            case ADD_CLASSES_START:
                return {
                    ...state,
                    loading: true
                }
            case ADD_CLASSES_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    addedClasses: action.payload,
                }
        default:
            return state
    }
}

