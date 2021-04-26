import { GET_CLASSES } from '../actions'

const initialState = {
    classes: [{
        name: "Yoga",
        type: "Yoga",
        startTime: "9 AM",
        duration: "30 minutes",
        intensityLevel: "3",
        location: "Park",
        attendees: 22,
        maxClassSize: "30"
    },
    {
        name: "Cycling",
        type: "Cycling",
        startTime: "7 AM",
        duration: "60 minutes",
        intensityLevel: "5",
        location: "Gym",
        attendees: 29,
        maxClassSize: "40"
    }],
    isLoggedin:false,
    loading: false,
    errors: false,
    test:[]
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case GET_CLASSES:
            return {...state, loading: !state.loading}
        default:
            return state
    }
}

