const express = require("express");
const passport = require("passport");

const db = require("../../database");

const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/google/redirect",
    passport.authenticate("google", {
        failureRedirect: "http://localhost:3000/login"
    }),
    (req, res) => {
        console.log("in /google/redirect");
        console.log(req.user);
        res.redirect(
            "http://localhost:3000/user/" + req.user._id + "/dashboard"
        );
        // const userRef = db.collection("users").doc(req.user);
        // userRef
        //     .get()
        //     .then(user => {
        //     })
        //     .catch(err => {
        //         res.status(404).json({
        //             message: "Cannot find user"
        //         });
        //     });
    }
);

router.get("/current_user", (req, res) => {
    console.log(req.user);
    res.json(req.user);
});

router.get("/logout", (req, res) => {
    req.logout();
    res.json({
        message: "Successfully logged out!"
    });
});

module.exports = router;
