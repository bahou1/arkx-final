import mongoose from 'mongoose';

const walletOperation = new mongoose.Schema({
    id: Number,
    customerName: String,
    customerEmail: String,
    customerAddress: String,
    customerPhoneNumber: String,
    orderTotal: Number,
    orderAmount: Number
}, { collection: 'walletoperations' });

export default mongoose.model('WalletOperation', walletOperation);
