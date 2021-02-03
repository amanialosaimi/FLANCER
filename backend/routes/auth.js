const { Router } = require('express')
const auth = Router()
const passport = require("passport");
const CLIENT_HOME = "http://localhost:3000";

/* Failed Login Route */
auth.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "Authentication Failed"
    });
});

/*
Logout Route 
Redirect To Frontend Homepage
*/
auth.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME);
});

/* User Profile OR Flash Error */
auth.get('/login', function (req, res) {
    if (req.isAuthenticated()) {
        res.json({
            user: req.user,
        });
    } else {
        res.json({ message: 'Login To Access Your Dashboard' })
    }
});

auth.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/api/auth/login/failed',
            failureFlash: false
        }),
    function (req, res) {
        res.redirect('/api/auth/login');
    });

module.exports = { auth };