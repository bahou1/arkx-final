import mongoose from 'mongoose';

const order = new mongoose.Schema({
    orderId: Number,
    customerId: Number,
    orderDate: String,
    items: [String],
    total: String
}, { collection: 'orderlist' });

export default mongoose.model('Order', order);
