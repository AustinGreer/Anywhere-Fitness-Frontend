import { DELETE_CLASSES_START, DELETE_CLASSES_SUCCESS, ADD_CLASSES_START, ADD_CLASSES_SUCCESS, GET_CLASSES_START, GET_CLASSES_SUCCESS, GET_CLASSES_FAILURE } from '../actions'

const initialState = {
    classes: [],
    addClass: [],
    deleteClass: [],
    isLoggedin: false,
    loading: false,
    errors: '',
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case GET_CLASSES_START:
            return {
                ...state,
                loading: true,
                errors: ''
            }
        case GET_CLASSES_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                loading: false,
                errors: ''
            }

        case GET_CLASSES_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload
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
                    addClass: action.payload
                }
            case DELETE_CLASSES_START:
                return {
                    ...state,
                    loading:true
                }
            case DELETE_CLASSES_SUCCESS:
                console.log(action.payload)
                return {
                    ...state,
                    deleteClass: state.deleteClass.filter(classId => classId.class_id !== action.payload)
                }
        default:
            return state
    }
}

