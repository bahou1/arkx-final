import RestaurantProfile from '../mod/RestaurantProfile.js';
import Customer from '../mod/Customer.js';
import Order from '../mod/order.js';
import WalletOperation from '../mod/WalletOperation.js';
import Menu from '../mod/Menu.js';



// Editing a menu item by identifier
// Edit menu item by identifier
export const editMenuItem = async (req, res) => {
    try {
        const { identifier } = req.params;
        const { title, price } = req.body;

        const updatedItem = await Menu.findOneAndUpdate(
            { identifier: parseInt(identifier) },
            { title, price },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.json({ message: 'Menu item updated successfully', updatedItem });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




// Deleting a menu item by identifier

export const deleteMenuItem = async (req, res) => {
    try {
        const { identifier } = req.params;

        // Find and delete the menu item with the specified identifier
        const deletedItem = await Menu.findOneAndDelete({ identifier: parseInt(identifier) });

        // Check if the item was not found and return a 404 error
        if (!deletedItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Deleted menu item:', deletedItem);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



// Fetching all menu items
export const getAllMenuItems = async (req, res) => {
    try {
        const menus = await Menu.find();
        console.log('Fetched menus:', menus);
        res.json(menus);
    } catch (error) {
        console.error('Error fetching menus', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetching all restaurant profiles
export const getAllRestaurantProfiles = async (req, res) => {
    try {
        const profiles = await RestaurantProfile.find();
        console.log('Fetched restaurant profiles:', profiles);
        res.json(profiles);
    } catch (error) {
        console.error('Error fetching restaurant profiles', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetching all customers
export const getAllCustomers = async (req, res) => {
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
};

// Fetching all orders
export const getAllOrders = async (req, res) => {
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
};

// Fetching all wallet operations
export const getAllWalletOperations = async (req, res) => {
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
};