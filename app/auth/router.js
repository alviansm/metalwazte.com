const express = require('express');
const router = express.Router();
const {register} = require('./controller');

router.get('/johndoe', (req, res) => {
    res.render('user_profile');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/register', register);

module.exports = router;