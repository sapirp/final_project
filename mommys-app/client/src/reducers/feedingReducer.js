import { GET_FEEDING_TRACK, ADD_NEW_FEEDING_TRACK, DELETE_FEEDING_TRACK, TRACKS_LOADING } from '../actions/types';


const initialState = {
    fitems: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FEEDING_TRACK:
            return {
                ...state,
                fitems: action.payload,
                loading: false
            };

        case ADD_NEW_FEEDING_TRACK:
            return {
                ...state,
                fitems: [action.payload, ...state.fitems]
            };

        case DELETE_FEEDING_TRACK:
            return {
                ...state,
                itmes: state.fitems.filter(item => item._id !== action.payload)
            };

        case TRACKS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}