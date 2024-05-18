import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Adding the _id field
    title: String,
    price: String,
    rating: Number,
    imgUrl: String
}, { collection: 'menu' });

export default mongoose.model('Menu', menuSchema);
