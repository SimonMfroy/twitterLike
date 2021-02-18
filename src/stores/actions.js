const LOGIN_USER = 'loginUser';
const DECO_USER = 'decoUser';
const FETCH_INFO = 'fetchInfo';
const FETCH_EMPTY = 'fetchEmpty';

const decoUser = (token  = "") => {
    return {
        type: DECO_USER,
        token: token,
    };
};
const loginUser = (token) => {
    return {
        type: LOGIN_USER,
        token: token,
    };
};

const fetchInfo = (token) => {
    return {
        type: FETCH_INFO,
        token: token,
    };
};

const fetchEmpty = (token = "") => {
    return {
        type: FETCH_INFO,
        token: token,
    };
};

export {
    loginUser,
    decoUser,
    fetchInfo,
    fetchEmpty,
    FETCH_EMPTY,
    FETCH_INFO,
    LOGIN_USER,
    DECO_USER,
};