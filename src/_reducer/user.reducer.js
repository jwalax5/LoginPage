import { userConstants } from '../_constant';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return state;
        case userConstants.LOGIN_SUCCESS:
            return state;
        case userConstants.LOGIN_FAILED:
            return state;
        default:
            return state;
    }
};