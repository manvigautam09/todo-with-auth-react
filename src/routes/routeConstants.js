import Login from "./Login";
import SignUp from "./SignUp";
import TodoDashboard from "./TodoDashboard";

export const routeConstants = {
    LOGIN: {
        path: "/login",
        name: "Login",
        component: Login
    },
    SIGNUP: {
        path: "/signUp",
        name: "SignUp",
        component: SignUp
    },
    TODODASHBOARD: {
        path: "/todoDashboard",
        name: "TodoDashboard",
        component: TodoDashboard
    }
};
