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

export const updateLoginFormError = (payload) => {
    return {
        type: actionTypes.UPDATE_LOGIN_FORM_ERROR,
        payload: payload
    }
}

export const updateSignUpFormError = (payload) => {
    return {
        type: actionTypes.UPDATE_SIGNUP_FORM_ERROR,
        payload: payload
    }
}
