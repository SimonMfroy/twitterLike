import { createStore } from 'redux';
import { LOGIN_USER, DECO_USER, FETCH_INFO,FETCH_EMPTY } from './actions';

const initialState = {
    userFetch:null,
    userInfo:null,
};

const reducer = (state = initialState, payload) => {
    const { type, token } = payload;
    const { userFetch, userInfo } = state;

    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: token.user,
            };
        case DECO_USER:
            return {
                userFetch:null,
                userInfo:null,
            };
        case FETCH_INFO:
            return {
                ...state,
                userFetch: token,
            };
        case FETCH_EMPTY:
            return {
                ...state,
                userFetch: null,
            };
        
        default:
            return state;
    }
};

export default createStore(reducer);