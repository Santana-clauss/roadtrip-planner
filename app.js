const express = require('express');
const mongoose = require('mongoose');
const destinationRoutes = require('./routes/destinationRoute.js');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT || 4005;

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); 

// Routes
app.use('/api', destinationRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Road Trip Planner!');
});

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});

