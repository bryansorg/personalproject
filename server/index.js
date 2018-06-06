const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const { strategy, logout } = require(`${__dirname}/authController`);

const mc = require("./mainctrlr");

const port = process.env.PORT || 3001;

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 24 * 7
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log(user);

  const db = app.get("db");
  db.getUserByAuthID([user.id]).then(response => {
    console.log(response);

    if (!response[0]) {
      db.addUserByAuthID([user.displayName, user.nickname, user.id])
        .then(res => done(null, res[0]))
        .catch(console.log);
    } else return done(null, response);
  });
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/profileinfo",
    failureRedirect: "/landing"
  }),
  (req, res, next) => {
    return res.redirect("/");
  }
);

app.get("/api/users", mc.getUsers);

app.listen(port, console.log(`listening on port #${port}`));
