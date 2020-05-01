import { actionTypes } from "../actionTypes";

export const updateLoginDetails = (payload) => {
    return {
        type: actionTypes.UPDATE_LOGIN_DETAILS,
        payload: payload
    }
}

export const updateSignUpDetails = (payload) => {
    return {
        type: actionTypes.UPDATE_SIGNUP_DETAILS,
        payload: payload
    }
}
