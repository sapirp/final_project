import axios from 'axios'
import { GET_FEEDING_TRACK, ADD_NEW_FEEDING_TRACK, DELETE_FEEDING_TRACK, TRACKS_LOADING } from './types';
import { returnErrors } from './errorActions'
import { getUserId } from './authActions'

export const getFeedingTrack = () => (dispatch, getState) => {
    dispatch(setTracksLoading());
    const uid = getUserId(getState);
    axios.get(`/api/feedingTrack/${uid}`)
        .then(res =>
            dispatch({
                type: GET_FEEDING_TRACK,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addFeedingTrack = item => dispatch => {
    axios.post('/api/feedingTrack', item)
        .then(res =>
            dispatch({
                type: ADD_NEW_FEEDING_TRACK,
                payload: res.data
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteTrack = id => dispatch => {
    axios.delete(`/api/feedingTrack/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_FEEDING_TRACK,
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