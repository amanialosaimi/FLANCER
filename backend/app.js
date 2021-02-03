/* Import Packages */
require("dotenv").config();
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
const { user } = require('./routes/user')
/* Initial Express Server */
const app = express()
/* Database Connection */
mongoose.connect('mongodb+srv://dbFlancer:dbFL@2021@cluster0.sk19x.mongodb.net/flancers?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const Developer = require('./model/developer')
const Project = require('./model/project')
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3001', '*'],
}));

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
/* REST API Endpoints */
app.use('/api/v1', index)
/* REST API Authorization Endpoints */
app.use("/api/auth", auth);
/* REST API User Endpoints */
app.use('/api/user', user);
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
app.get("/api", checkLogin, async (req, res) => {
        try {
            await Developer.find({ _id: req.user._id })
                .populate("projects")
                .exec((err, profile) => {
                    if (!err) {


                        console.log(profile)
                        res.status(200).json({
                            authenticated: req.isAuthenticated(),
                            message: "User Authenticated",
                            user: req.user,
                            projects: profile[0].projects,
                            cookies: req.cookies
                        });
                    } else { console.log(err) }
                    console.log(profile)
                })
        } catch (err) {
            console.log(err)
        }

});
/* Register New User */
app.post('/api/register', (req, res) => {
    if (!req.isAuthenticated()) {
        Developer.register(new Developer({ username: req.body.username }), req.body.password, function (err) {
            if (err) {
                console.log('Error Register New User: ', err);
                return next(err);
            }
            console.log('New User Registered!');
            res.redirect('/api/auth/login');
        })
    } else {
        res.json({ message: "You are already logged in" })
    }
})
/* Find All Users - Temporary Route */
app.get('/api/find', (req, res) => {
    Developer.find({}, (err, all) => {
        res.json(all)
    })
})
// find public projects 
app.get('/api/findPublicProject', (req, res) => {
    Project.find({isVisible : true}, (err, public) => {
        res.json(public)
    })
})

/* Application Port */
const PORT = process.env.PORT || 3000
/* API Server Listen For Connections */
app.listen(PORT, () => { console.log(`Flancer | Backend Server - Port ${PORT}`) })
