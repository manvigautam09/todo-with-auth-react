
const minLength = (len, num) => {
    if (len < num) {
        return true;
    }
    return false;
}

const maxLength = (len, num) => {
    if (len > num) {
        return true;
    }
    return false;
}

export const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return "";
    }
    return ("Not a valid email");
}

export const validatePassword = (password) => {
    if (minLength(password.length, 8)) {
        return "Password is too short";
    }

    else if (maxLength(password.length, 15)) {
        return "Password is too long"
    }

    return "";
}

export const validateUserName = (name) => {
    if (minLength(name.length, 10)) {
        return "Name is too short";
    }
    else if (maxLength(name.length, 35)) {
        return "Name is too long"
    }
    return ""
}

export const validateConfirmPassword = (password, value) => {
    if (minLength(value.length, 8)) {
        return "Password is too short";
    }
    else if (password !== value) {
        return "Passwords do not match";
    }
    return ""
}

export const loginFormConstants = [
    {
        label: "Email",
        type: "email",
        name: "email"

    },
    {
        label: "Password",
        type: "password",
        name: "password"
    }
]
export const signupFormConstants = [
    {

        label: "Name",
        type: "text",
        name: "name"
    },
    {
        label: "Email",
        type: "email",
        name: "email"
    },
    {
        label: "Password",
        type: "password",
        name: "password"
    },
    {

        label: "Confirm Password",
        type: "password",
        name: "confirmPassword"
    }
]
export const formNames = {
    LOGIN: {
        name: "Login",
        label: "Sign In"
    },
    SIGNUP: {
        name: "Signup",
        label: "Sign Up"
    }
}
