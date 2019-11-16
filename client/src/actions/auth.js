import axios from "axios";

import { SET_CURRENT_USER, LOGOUT } from "./types";

// export const loginUsingGoogle = () => dispatch => {
//     // console.log("in action/auth");
//     axios
//         .get("/api/auth/google")
//         .then(userData => {
//             console.log(userData);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };

export const setCurrentUser = () => dispatch => {
    axios
        .get("/api/auth/current_user")
        .then(res => {
            console.log("in auth actions");
            console.log(res.data);
            dispatch({
                type: SET_CURRENT_USER,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const logout = () => dispatch => {
    axios
        .get("/api/auth/logout")
        .then(res => {
            console.log("logout action");
            console.log(res);
            dispatch({
                type: LOGOUT
            });
        })
        .catch(err => {
            console.log(err);
        });
};
