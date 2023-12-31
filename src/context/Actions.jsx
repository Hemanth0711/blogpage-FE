export const LoginStart = (useCrendentials) => ({
    type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (useCrendentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});