import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3000;

// Define Mongoose model for menuItems collection
const RestaurantProfile = mongoose.model('RestaurantProfile', new mongoose.Schema({
    title: String,
    price: String,
    rating: Number,
    imgUrl: String
}, { collection: 'menuItems' })); // specify just the collection name

// connect to the 'items' database in your MongoDB
mongoose.connect('mongodb+srv://anwarbahou:benmolay@cluster0.xfsd1am.mongodb.net/items?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(cors()); // Use CORS middleware to handle cross-origin requests

app.get('/api/restaurant-profile', async (req, res) => {
    try {
        const profiles = await RestaurantProfile.find();
        console.log('Fetched restaurant profiles:', profiles); // Log fetched data
        res.json(profiles);
    } catch (error) {
        console.error('Error fetching restaurant profiles', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});