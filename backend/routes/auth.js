const { Router } = require('express')
const auth = Router()
const passport = require("passport");

/* Failed Login Route */
auth.get("/login/failed", (req, res) => {
    res.status(401).json({ message: "Authentcation failed, check your credentials and try again!" })
});

/* Activation Route */
auth.get("/login/deactivated", (req, res) => {
    res.status(403).json({ message: "Your account is suspended, contact us for more information. " })
})

/*
Logout Route 
Redirect To Frontend Homepage
*/
auth.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/')
});

/* User Profile OR Flash Error */
auth.get('/login', function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isDeactive) {
            req.logout()
            res.redirect('/api/auth/login/deactivated')
        } else {
            res.json({
                user: req.user,
            });
        }

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