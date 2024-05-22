import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
identifier: String,    title: String,
    price: String,
    rating: Number,
    imgUrl: String
}, { collection: 'menu' });

export default mongoose.model('Menu', menuSchema);
