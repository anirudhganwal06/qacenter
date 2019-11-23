const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const db = require("./database");

const keys = require("./config/keys");

passport.serializeUser((user, done) => {
    // done(null, user._id);

    done(null, user);
});

passport.deserializeUser((user, done) => {
    // const usersRef = db.collection("users");
    // usersRef
    //     .doc(id)
    //     .get()
    //     .then(user => {
    //         done(null, { ...user.data(), _id: id });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.google.clientId,
            clientSecret: keys.google.clientSecret,
            callbackURL: "/api/auth/google/redirect"
        },
        (accessToken, refreshToken, profile, done) => {
            // add the user to the database
            const usersRef = db.collection("users");
            usersRef
                .where("googleId", "==", profile.id)
                .get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        console.log("1111");
                        const newUser = {
                            name: profile.displayName,
                            googleId: profile.id,
                            photoUrl: profile.photos[0].value
                        };
                        db.collection("users")
                            .add(newUser)
                            .then(newUserRef => {
                                const user = {
                                    ...newUser,
                                    _id: newUserRef.id
                                };
                                console.log(user);
                                done(null, user);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    } else {
                        snapshot.forEach(doc => {
                            console.log(doc.data());
                            done(null, {
                                ...doc.data(),
                                _id: doc.id
                            });
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    )
);
