import axios from 'axios';
import { returnErrors } from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCES
} from "./types";

//--------------------------- Check token & load user---------------------------------------------------
export const loadUser = () => (dispatch, getState) => {
    //User laoding
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenCofig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data //return the user object and the token
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
//--------------------------------------------------------------------------------------------------------

//---------------------Register User----------------------------------------------------------------------
export const register = ({ name, email, birth_date, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ name, email, birth_date, password });

    axios.post('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};
//-------------------------------------------------------------------------------------------------------------

//------------------Login User---------------------------------------------------------------------------------
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ email, password });

    axios.post('/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

//------------------Logout User--------------------------------------------------------------------------------
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

//-------------------------------------------------------------------------------------------------------------

//Setup config/headers and token- any time we want to send the token to a certain end-point we can use that
export const tokenCofig = getState => {
    //Get token from localstorege - taks the token from the state in authReducer
    const token = getState().auth.token;

    //Headers - add the token to the header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    //If token => add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config
}

export const getUserId = getState => {
    if (getState().auth.user !== null) {
        const Id = getState().auth.user._id;
        return Id
    }
    else return null
}