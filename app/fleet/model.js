const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const fleetSchema = Schema({
    name: {
        type: String,
        required: [true, "Item name can't be empty."],
        maxlength: [255, "Character length exceeded."],
        minlength: [3, "Character too short."]
    },
    status: {
        type: String,
        required: [true, "Item name can't be empty."],
        maxlength: [255, "Character length exceeded."],
        minlength: [3, "Character too short."]
    },
    build: {
        type: String,
        required: [true, "Item name can't be empty."],
        maxlength: [255, "Character length exceeded."],
        minlength: [3, "Character too short."]
    },
    location: {
        type: String,
        required: [true, "Item name can't be empty."],
        maxlength: [255, "Character length exceeded."],
        minlength: [3, "Character too short."]
    },
    fleet_img: {
        type: String,
        required: [true, "Item name can't be empty."],
        maxlength: [255, "Character length exceeded."],
        minlength: [3, "Character too short."]
    },
    price: {
        type: Number,
        required: [true, "Item name can't be empty."]
    }
});

module.exports = model('Fleet', fleetSchema);