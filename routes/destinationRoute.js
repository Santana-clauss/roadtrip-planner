// routes/destinationRoutes.js
const express = require('express');
const {
    addDestination,
    getDestinations,
    reorderDestinations,
    getRoute,
    getSummary,
} = require('../controllers/destinationController.js');

const router = express.Router();

//routes
router.post('/destinations', addDestination); // Add a destination
router.get('/destinations', getDestinations); // Get all destinations
router.put('/destinations/reorder', reorderDestinations); // Rearrange destinations
router.get('/route', getRoute); //  route details
router.get('/summary', getSummary); // journey summary

module.exports = router;
