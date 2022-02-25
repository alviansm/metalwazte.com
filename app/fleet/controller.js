const mongoose = require('mongoose');
const Fleet = require('./model');

const index = async (req, res) => {
    try {
        const fleet = await Fleet.find().sort({createdAt: 'desc'}).lean();
        res.render('list_ship', {
            fleet: fleet
        })
    } catch (err) {
        return res.render('error', {
            error: err
        })
    }
}

const post = async (req, res, next) => {
    req.fleet = new Fleet();
    next();
}

function saveFleetAndRedirect(path) {
    return async (req, res) => {
        let fleet = req.fleet;
        fleet.name = req.body.name;
        fleet.status = req.body.status;
        fleet.build = req.body.build;
        fleet.location = req.body.location;
        fleet.fleet_img = req.body.fleet_img;
        fleet.price = req.body.price;
        try {
            fleet = fleet.save();
            return res.redirect(path);
        } catch (error) {
            res.render('error', {
                error: error
            })
        }
    }
}

const put = async (req, res, next) => {
    try{
        const id = req.params.id;
        const {name, status, build, location, fleet_img, price} = req.body;

        const updateFleet = await Fleet.findOneAndUpdate({_id: req.params.id}, {
            name,
            status,
            build,
            location,
            fleet_img,
            price
        });

        res.redirect('/');
    } catch (error) {
        res.render('error', {
            error: error
        })
    }
}

const remove = async (req, res, next) => {
    try {
        const singleFleet = await Fleet.find({_id: req.params.id});
        Fleet.remove({_id: req.params.id}, (err => res.render('error', {error: err})));
        res.redirect('/');
    } catch (error) {
        res.redirect('error', {
            error: error
        });
    }
}

module.exports = {
    index,
    post,
    saveFleetAndRedirect
}