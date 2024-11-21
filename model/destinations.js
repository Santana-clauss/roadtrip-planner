const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    address: {
        type: String,
        required: true, 
    },
    coordinates: {
        type: {
            lat: { type: Number, required: false }, // Latitude
            lng: { type: Number, required: false }, // Longitude
        },
        required: false, 
    },
    addedAt: {
        type: Date,
        default: Date.now, 
    },
});

// Export the model
module.exports = mongoose.model('Destination', destinationSchema);
