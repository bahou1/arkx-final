import mongoose from 'mongoose';

const restaurantProfile = new mongoose.Schema({
    title: String,
    price: String,
    rating: Number,
    imgUrl: String
}, { collection: 'menuItems' });

export default mongoose.model('RestaurantProfile', restaurantProfile);
