import express from 'express';
import * as controllers from '../controllers/controller.js';

const router = express.Router(); // Creating an instance of express router

// Define routes

router.delete('/menu/:identifier', controllers.deleteMenuItem);
router.get('/menu', controllers.getAllMenuItems);
router.get('/restaurant-profile', controllers.getAllRestaurantProfiles);
router.get('/customers', controllers.getAllCustomers);
router.get('/orderlist', controllers.getAllOrders);
router.get('/walletoperations', controllers.getAllWalletOperations);
router.put('/menu/:identifier', controllers.editMenuItem);

export default router;