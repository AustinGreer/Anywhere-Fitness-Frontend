import { GET_CLASSES, ADD_CLASSES_START, ADD_CLASSES_SUCCESS } from '../actions'

const initialState = {
    classes: [],
    addedClasses: [],
    isLoggedin:false,
    loading: false,
    errors: false,
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case GET_CLASSES:
            return {...state, loading: !state.loading, classes: action.payload}
        case ADD_CLASSES_SUCCESS:
            return {
                ...state,
                addedClasses: action.payload
            }
        default:
            return state
    }
}

