import { combineReducers } from 'redux';
import wellCareReducer from './wellCareReducer';
import diaperReducer from './diaperReducer';
import feedingReducer from './feedingReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
    wellCareTracks: wellCareReducer,
    diaperTracks: diaperReducer,
    feedingTracks: feedingReducer,
    error: errorReducer,
    auth: authReducer
});