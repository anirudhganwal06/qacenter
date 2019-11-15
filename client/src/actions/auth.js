import axios from "axios";

export const loginUsingGoogle = () => dispatch => {
    // console.log("in action/auth");
    axios
        .get("/api/auth/google")
        .then(userData => {
            console.log(userData);
        })
        .catch(err => {
            console.log(err);
        });
};
