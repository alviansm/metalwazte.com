const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please fill the username"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    company_name: {
        type: String,
        required: [true, "Please fill the company_name"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    company_role: {
        type: String,
        required: [true, "Please fill the company_role"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    company_service: {
        type: String,
        required: [true, "Please fill the company_service"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    location: {
        type: String,
        required: [true, "Please fill the location"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    founded: {
        type: String,
        required: [true, "Please fill the founded"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    ceo: {
        type: String,
        required: [true, "Please fill the ceo"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    company_website: {
        type: String,
        required: [true, "Please fill the company_website"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    email: {
        type: String,
        required: [true, "Please fill the email"],
        minlength: [3, "Character minimum length is 3"],
        maxlength: [100, "Character maximum length is 100"]
    },
    password: {
        type: String,
        required: [true, "Password can't be empty"],
        minlength: [3, "Character minimum length is 3"]
    }
})

module.exports = model('User', userSchema);