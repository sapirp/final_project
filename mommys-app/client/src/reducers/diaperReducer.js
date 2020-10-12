import { GET_DIAPER_TRACK, ADD_NEW_DIAPER_TRACK, DELETE_DIAPER_TRACK, TRACKS_LOADING } from '../actions/types';


const initialState = {
    items: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DIAPER_TRACK:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case ADD_NEW_DIAPER_TRACK:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case DELETE_DIAPER_TRACK:
            return {
                ...state,
                itmes: state.items.filter(item => item._id !== action.payload)
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