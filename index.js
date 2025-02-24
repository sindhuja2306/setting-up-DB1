require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.error(`Error connecting to database: ${error.message}`);
});

app.get('/', (req, res) => {
    res.send('Customer Management System Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
