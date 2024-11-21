// controllers/destinationController.js
const Destination = require('../models/Destination');

// Add a new destination
exports.addDestination = async (req, res) => {
    const { name, address, coordinates } = req.body;
    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required.' });
    }

    try {
        const destination = new Destination({ name, address, coordinates });
        await destination.save();
        res.status(201).json({ message: 'Destination added!', destination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add destination.', details: error.message });
    }
};

// Get all destinations
exports.getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch destinations.', details: error.message });
    }
};

// Rearrange destinations
exports.reorderDestinations = async (req, res) => {
    const { order } = req.body; 

    if (!Array.isArray(order)) {
        return res.status(400).json({ error: 'Order must be an array of destination IDs.' });
    }

    try {
        const destinations = await Destination.find(); 
        const reordered = [];

        for (const id of order) {
            const destination = destinations.find(dest => dest._id.toString() === id);
            if (!destination) {
                return res.status(400).json({ error: `Invalid destination ID: ${id}` });
            }
            reordered.push(destination);
        }

        res.status(200).json({ message: 'Destinations reordered!', reordered });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reorder destinations.', details: error.message });
    }
};

//  route calculations
exports.getRoute = (req, res) => {
    res.json({ message: 'Route calculation to be implemented......' });
};

//  journey summary
exports.getSummary = (req, res) => {
    res.json({ message: 'Journey summary to be implemented.....' });
};
