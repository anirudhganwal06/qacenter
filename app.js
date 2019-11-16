const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

const passportSetup = require("./passport-setup");
const keys = require("./config/keys");

// const ignoreFavicon = require("./middlewares/ignoreFavicon");

const authRoutes = require("./routes/api/auth");

const app = express();

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// app.use(ignoreFavicon);

app.use("/api/auth", authRoutes);

const PORT = "5000";
app.listen(PORT, () => {
    console.log(`Server running @${PORT}`);
});
