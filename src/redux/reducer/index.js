import { GET_CLASSES } from '../actions'

const initialState = {
    classes: [],
    isLoggedin:false,
    loading: false,
    errors: false,
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case GET_CLASSES:
            return {...state, loading: !state.loading, classes: action.payload}
        default:
            return state
    }
}

