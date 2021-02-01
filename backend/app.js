/* Import Packages */
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;
/* Import REST API Routes */
const { index } = require('./routes/index')
const { auth } = require('./routes/auth')
/* Initial Express Server */
const app = express()
/* Database Connection */
const db = 'flancer';
mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const Developer = require('./model/developer')
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors({ credentials: true }));

/* Auth Cookie Setup */
app.use(
    cookieSession({
        name: "session",
        keys: ['FLANCER_COOKIE_IXYSYFHQLIIUQ'],
        maxAge: 10800000
    })
);
// parse cookies
app.use(cookieParser());
/* Initalize passport */
app.use(passport.initialize());
/* deserialize cookie from the browser */
app.use(passport.session());
/* Local Authentication Strategy */
passport.use(new LocalStrategy(Developer.authenticate()));
/* Serialize User.id To Cookie Session */
passport.serializeUser(Developer.serializeUser())
/* Deserialize User */
passport.deserializeUser(Developer.deserializeUser())
/* RESTful API Routes */
app.use('/api/v1', index)
/* Setup Authorization Routes */
app.use("/auth", auth);
/* Check If User Login */
const checkLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).json({
            authenticated: false,
            message: "User Login Required"
        });
    } else {
        next();
    }
};
/* Login Status */
app.get("/", checkLogin, (req, res) => {
    res.status(200).json({
        authenticated: req.isAuthenticated(),
        message: "User Authenticated",
        user: req.user,
        cookies: req.cookies
    });
});
/* Register New User */
app.post('/register', (req, res) => {
    if (!req.isAuthenticated()) {
        Developer.register(new Developer({ username: req.body.username }), req.body.password, function (err) {
            if (err) {
                console.log('Error Register New User: ', err);
                return next(err);
            }
            console.log('New User Registered!');
            res.redirect('/auth/login');
        })
    } else {
        res.json({message: "You are already logged in"})
    }
})
/* Find All Users - Temporary Route */
app.get('/find', (req, res) => {
    Developer.find({}, (err, all) => {
        res.json(all)
    })
})

//find user by Id 
app.get("/find/:id", (req, res) => {
    Developer.findById(req.params.id, (err, founduser) => {
      if (err) {
        res.json(err);
      } else {
          res.json({message: "You are already logged in"})
        res.json(founduser);
      }
  })
});
//update user by Id 
app.put('/find/:id', (req, res) => {
    console.log('PARAMS:', req.params);
    Developer.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json('DONE');
      }
    });
  });
  //delete the user byID 
  app.delete('/find/:id', (req, res) => {
    console.log('PARAMS:', req.params);
    Developer.findOneAndDelete({ _id: req.params.id }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json('DELETE SUCCESS');
      }
    });
  });
  //for the error
app.get("*", (req, res) => {
    res.status(404).sendFile(`${__dirname}/404/404.html`);
  });
/* Application Port */
const PORT = process.env.PORT || 3000
/* API Server Listen For Connections */
app.listen(PORT, () => { console.log(`Flancer | Backend Server - Port ${PORT}`) })
