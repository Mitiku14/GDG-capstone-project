// src/routes/googleAuthRoutes.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken'); // You might not need this here if you handle redirection

const router = express.Router();


router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    
    const token = req.user.token;

   
    res.redirect(`/?google_token=${token}`);

  }
);

module.exports = router;