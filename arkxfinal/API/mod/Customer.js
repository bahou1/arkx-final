import mongoose from 'mongoose';

const customer = new mongoose.Schema({
    id: Number,
    joinDate: String,
    name: String,
    location: String,
    totalSpent: String,
}, { collection: 'customers' });

export default mongoose.model('Customer', customer);
