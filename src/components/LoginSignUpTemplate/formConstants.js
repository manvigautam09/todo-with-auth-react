const minLength = (len, num) => {
  if (len < num) {
    return true;
  }
  return false;
};

const maxLength = (len, num) => {
  if (len > num) {
    return true;
  }
  return false;
};

export const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "";
  }
  return "Not a valid email";
};

export const validatePassword = (password) => {
  if (minLength(password.length, 8)) {
    return "Password is too short";
  } else if (maxLength(password.length, 15)) {
    return "Password is too long";
  }

  return "";
};

export const validateUserName = (name) => {
  if (minLength(name.length, 10)) {
    return "Name is too short";
  } else if (maxLength(name.length, 35)) {
    return "Name is too long";
  }
  return "";
};

export const validateConfirmPassword = (value, password) => {
  if (minLength(value.length, 8)) {
    return "Password is too short";
  } else if (password !== value) {
    return "Passwords do not match";
  }
  return "";
};

export const alternateFormLinkLabels = {
  LOGIN: "Create an account",
  SIGNUP: "I am already member",
};

export const loginFormConstants = [
  {
    label: "Email",
    type: "email",
    name: "email",
    validations: validateEmail,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    validations: validatePassword,
  },
];
export const signupFormConstants = [
  {
    label: "Name",
    type: "text",
    name: "name",
    validations: validateUserName,
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    validations: validateEmail,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    validations: validatePassword,
  },
  //   {
  //     label: "Confirm Password",
  //     type: "password",
  //     name: "confirmPassword",
  //     validations: validateConfirmPassword,
  //   },
];
export const formNames = {
  LOGIN: {
    name: "Login",
    label: "Sign In",
  },
  SIGNUP: {
    name: "Signup",
    label: "Sign Up",
  },
};
