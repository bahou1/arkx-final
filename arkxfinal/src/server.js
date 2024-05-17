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
}, { collection: 'menuItems' }));

// Define Mongoose model for customers collection
const Customer = mongoose.model('Customer', new mongoose.Schema({
    id: Number,
    joinDate: String,
    name: String,
    location: String,
    totalSpent: String,
}, { collection: 'customers' }));

// Define Mongoose model for orderlist collection
const Order = mongoose.model('Order', new mongoose.Schema({
    orderId: Number,
    customerId: Number,
    orderDate: String,
    items: [String],
    total: String
}, { collection: 'orderlist' }));

// Define Mongoose model for walletoperations collection
const WalletOperation = mongoose.model('WalletOperation', new mongoose.Schema({
    id: Number,
    customerName: String,
    customerEmail: String,
    customerAddress: String,
    customerPhoneNumber: String,
    orderTotal: Number,
    orderAmount: Number
}, { collection: 'walletoperations' }));

// Connect to the 'items' database in your MongoDB
mongoose.connect('mongodb+srv://anwarbahou:benmolay@cluster0.xfsd1am.mongodb.net/items?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(cors()); // Use CORS middleware to handle cross-origin requests

// API endpoints

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

app.get('/api/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        console.log('Fetched customers:', customers); // Log fetched data
        if (customers.length === 0) {
            console.warn('No customers found in the collection');
        }
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/orderlist', async (req, res) => {
    try {
        const orders = await Order.find();
        console.log('Fetched orders:', orders); // Log fetched data
        if (orders.length === 0) {
            console.warn('No orders found in the collection');
        }
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/walletoperations', async (req, res) => {
    try {
        const walletOperations = await WalletOperation.find();
        console.log('Fetched wallet operations:', walletOperations); // Log fetched data
        if (walletOperations.length === 0) {
            console.warn('No wallet operations found in the collection');
        }
        res.json(walletOperations);
    } catch (error) {
        console.error('Error fetching wallet operations', error);
        res.status(500).json({ error: 'Internal server error' });
    }

    
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
