import express from 'express'; // Express framework for building web applications
import mongoose from 'mongoose'; // Mongoose for MongoDB object modeling
import cors from 'cors'; // CORS middleware for enabling cross-origin resource sharing
import routes from './routes/foodyRoutes.js'; // Importing routes from the routes file

// Creating an instance of the Express application
const app = express();
/* /Users/anwarbahou/Desktop/arkx-final/arkxfinal/API/routes/foodyRoutes */
// Setting the port number
const port = 3000;

// Connecting to MongoDB database
mongoose.connect('mongodb+srv://anwarbahou:benmolay@cluster0.xfsd1am.mongodb.net/items?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Enabling CORS middleware
app.use(cors());

// Parsing JSON data in the request body
app.use(express.json());

// Use the routes defined in the routes file
app.use('/api/', routes);

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
