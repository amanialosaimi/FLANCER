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
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const Developer = require('./model/developer')
const Project = require('./model/project')
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
/* Application Port */
const PORT = process.env.PORT || 3000
app.use(cors({
    credentials: true,
    origin: [`http://localhost:${PORT}`, "https://flancers.herokuapp.com"],
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
app.use('/api/github', index)
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
app.post('/api/register', async (req, res) => {
    if (!req.isAuthenticated()) {
        await Developer.register(new Developer(req.body), req.body.password)
            .then((err, user) => {
                return res.status(202).json({ message: "Thank you, you've been registered, login to access your dashboard" })
            }).catch((err) => {
                let errorMsg = err.toString()
                let errorArray = errorMsg.split(':')
                return res.status(202).json({ message: errorArray[1] })
            })
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
    Project.find({ isVisible: true }, (err, public) => {
        res.json(public)
    })
})

//serves all our static files from the build directory.
app.use(express.static(__dirname + "/build"));

// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
/* API Server Listen For Connections */
app.listen(PORT, () => { console.log(`Flancer | Backend Server - Port ${PORT}`) })
