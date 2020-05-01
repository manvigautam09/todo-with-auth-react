import actionTypes from "../actionTypes";

const initialState = {
    loginData: {
        email: "",
        password: ""
    },
    signUpData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
};

const loginSignUpReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return { ...state };
    }
};

export default loginSignUpReducer;
