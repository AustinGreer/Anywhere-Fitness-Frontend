import {
  SIGN_UP_SUCCESS,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  GET_CLASSES_START,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAILURE,
  ADD_CLASSES_START,
  ADD_CLASSES_SUCCESS,
  EDIT_CLASSES_START,
  EDIT_CLASSES_SUCCESS,
  EDIT_CLASSES_FAILURE,
  DELETE_CLASSES_START,
  DELETE_CLASSES_SUCCESS,
} from "../actions";

const initialState = {
  classes: [],
  addClass: [],
  deleteClass: [],
  editClass: [],
  isLoggedin: false,
  currentUser: {
    auth_code: null,
    user_id: 0,
    user_type: 1,
    user_name: ''
  },
  loading: false,
  errors: "",
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };

    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true, 
        currentUser: action.payload
      }

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggedin: action.payload
      }

    case GET_CLASSES_START:
      return {
        ...state,
        loading: true,
        errors: "",
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        loading: false,
        isLoggedin: true,
        errors: "",
      };

    case GET_CLASSES_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ADD_CLASSES_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        addClass: action.payload,
      };
    case DELETE_CLASSES_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CLASSES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        deleteClass: state.deleteClass.filter(
          (classId) => classId.class_id !== action.payload
        ),
      };
    case EDIT_CLASSES_START:
        return {
            ...state,
            loading: true,
            errors: ""
        }
    case EDIT_CLASSES_SUCCESS:
        return {
            ...state,
            editClass: action.payload,
            loading: false
        }
    case EDIT_CLASSES_FAILURE:
        return {
            ...state,
            loading: false,
            errors: action.payload
        }
    default:
      return state;
  }
}

