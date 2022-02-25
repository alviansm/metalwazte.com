const express = require('express');
const router = express.Router();
const fleetController = require('./controller');

router.get('/fleet', fleetController.index);
router.get('/fleet/fleet_id', (req, res) => {
    res.render('ship');
});

router.post('/fleet/:id', fleetController.post, fleetController.saveFleetAndRedirect('/'));
router.put('/fleet')

module.exports = router;