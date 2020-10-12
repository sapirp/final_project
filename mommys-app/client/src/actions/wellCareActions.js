import axios from 'axios'
import { GET_WELLCARE_TRACK, ADD_NEW_WELLCARE_TRACK, DELETE_WELLCARE_TRACK, TRACKS_LOADING } from './types';
import { returnErrors } from './errorActions'
import { getUserId } from './authActions'

export const getWellCareTrack = () => (dispatch, getState) => {
    dispatch(setTracksLoading());
    const uid = getUserId(getState);
    axios.get(`/api/wellCareTrack/${uid}`)
        .then(res =>
            dispatch({
                type: GET_WELLCARE_TRACK,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addWellCareTrack = item => dispatch => {
    axios.post('/api/wellCareTrack', item)
        .then(res =>
            dispatch({
                type: ADD_NEW_WELLCARE_TRACK,
                payload: res.data
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteTrack = id => dispatch => {
    axios.delete(`/api/wellCareTrack/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_WELLCARE_TRACK,
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