import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RestaurantProfile from '../API/mod/RestaurantProfile.js';
import Customer from '../API/mod/Customer.js';
import Order from '../API/mod/order.js';
import WalletOperation from '../API/mod/WalletOperation.js';
import Menu from '../API/mod/Menu.js';

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://anwarbahou:benmolay@cluster0.xfsd1am.mongodb.net/items?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
    app.use(cors());
    
    app.use(express.json());
app.use(cors());

app.delete('/api/menu/:identifier', async (req, res) => {
    try {
        const { identifier } = req.params;

        const deletedItem = await Menu.findOneAndDelete({ identifier });
        if (!deletedItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Deleted menu item:', deletedItem);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/api/menu', async (req, res) => {
    try {
        const menus = await Menu.find();
        console.log('Fetched menus:', menus);
        res.json(menus);
    } catch (error) {
        console.error('Error fetching menus', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/api/restaurant-profile', async (req, res) => {
    try {
        const profiles = await RestaurantProfile.find();
        console.log('Fetched restaurant profiles:', profiles);
        res.json(profiles);
    } catch (error) {
        console.error('Error fetching restaurant profiles', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        console.log('Fetched customers:', customers);
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
        console.log('Fetched orders:', orders);
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
        console.log('Fetched wallet operations:', walletOperations);
        if (walletOperations.length === 0) {
            console.warn('No wallet operations found in the collection');
        }
        res.json(walletOperations);
    } catch (error) {
        console.error('Error fetching wallet operations', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
