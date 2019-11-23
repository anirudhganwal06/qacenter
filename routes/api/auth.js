const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

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
        const payload = { ...req.user };

        jwt.sign(
            payload,
            "rating_dropped",
            { expiresIn: 3600 * 24 },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );

        console.log("in /google/redirect");
        // console.log(req.user.token);
        res.redirect("http://localhost:3000/");
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
