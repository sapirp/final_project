import { GET_WELLCARE_TRACK, ADD_NEW_WELLCARE_TRACK, DELETE_WELLCARE_TRACK, TRACKS_LOADING } from '../actions/types';


const initialState = {
    items: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WELLCARE_TRACK:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case ADD_NEW_WELLCARE_TRACK:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case DELETE_WELLCARE_TRACK:
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