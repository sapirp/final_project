import axios from 'axios'
import { GET_DIAPER_TRACK, ADD_NEW_DIAPER_TRACK, DELETE_DIAPER_TRACK, TRACKS_LOADING } from './types';
import { returnErrors } from './errorActions'
import { getUserId } from './authActions'

export const getDiaperTrack = () => (dispatch, getState) => {
    dispatch(setTracksLoading());
    const uid = getUserId(getState);
    axios.get(`/api/diaperTrack/${uid}`)
        .then(res =>
            dispatch({
                type: GET_DIAPER_TRACK,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addDiaperTrack = item => dispatch => {
    axios.post('/api/diaperTrack', item)
        .then(res =>
            dispatch({
                type: ADD_NEW_DIAPER_TRACK,
                payload: res.data
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteTrack = id => dispatch => {
    axios.delete(`/api/diaperTrack/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_DIAPER_TRACK,
                payload: id
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}

export const setTracksLoading = () => {
    return {
        type: TRACKS_LOADING
    }
}