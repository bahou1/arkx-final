import axios from 'axios';

const updateLocation = async () => {
  try {
    const response = await axios.post('http://localhost:3000/update-location', {
      deliveryPersonId: '1',
      location: { lat: 51.505, lng: -0.09 }, // You can change these coordinates to simulate movement
    });
    console.log('Location updated', response.data);
  } catch (error) {
    console.error('Error updating location', error);
  }
};

// Call updateLocation periodically to simulate real-time updates
setInterval(updateLocation, 5000); // Updates every 5 seconds
