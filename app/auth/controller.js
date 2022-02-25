const User = require('./model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

async function register(req, res) {
    const {
        username,
        company_name, 
        company_role, 
        company_service, 
        location, 
        founded, 
        ceo, 
        company_website, 
        email
    } = req.body;

    if (req.body.password.length < 6) {
        res.render('register', {
            error: `Too little password!`,
            username,
            company_name, 
            company_role, 
            company_service, 
            location, 
            founded, 
            ceo, 
            company_website,
            email
        })
    }

    if (req.body.password.length > 40) {
        res.render('register', {
            error: `Too many password!`,
            username,
            company_name, 
            company_role, 
            company_service, 
            location, 
            founded, 
            ceo, 
            company_website,
            email
        })
    }

    try {
        User.findOne({email: email}).then(user => {
            if (user) {
                res.render('register', {
                    error: `Email ${email} already exist`,
                    username,
                    company_name, 
                    company_role, 
                    company_service, 
                    location, 
                    founded, 
                    ceo, 
                    company_website
                });
            }
        });

        const hashedPassword = await bcrypt.hash(req.body.password, 12);        
        const  newFleet = new User({
            username,
            company_name,
            company_role,
            company_service,
            location,
            founded,
            ceo,
            company_website,
            email,
            password: hashedPassword
        });

        newFleet.save().then(res.redirect('/login'));
    } catch (error) {
        return res.render('register', {
            error: error
        });
    }
}

module.exports = {
    register
}