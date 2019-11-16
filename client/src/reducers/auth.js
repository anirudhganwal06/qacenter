import { SET_CURRENT_USER, LOGOUT } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                user: action.payload === "" ? {} : action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
};
