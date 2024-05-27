import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import axios from 'axios';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: '100%',
    height: '100vh'
  });

  const [deliveryMenLocations, setDeliveryMenLocations] = useState([]);

  useEffect(() => {
    const fetchDeliveryLocations = async () => {
      try {
        const response = await axios.get('/api/delivery-locations'); // Adjust the endpoint to match your backend route
        console.log('Response:', response.data); // Log the response data
        setDeliveryMenLocations(response.data);
      } catch (error) {
        console.error('Error fetching delivery locations:', error);
      }
    };

    // Fetch delivery locations initially
    fetchDeliveryLocations();

    // Set up interval to fetch delivery locations periodically (every 10 seconds in this example)
    const intervalId = setInterval(fetchDeliveryLocations, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  console.log('Delivery Men Locations:', deliveryMenLocations); // Log the delivery men locations

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiYW53YXJiYWhvdSIsImEiOiJjbHdqc3I2YXYwY2IyMmlyeWhhZzZsMnkxIn0.VDuZz5AmStBrGYbYOsvTng" // Your Mapbox access token
    >
      {deliveryMenLocations.map((location) => (
        <Marker
          key={location.deliveryManId}
          latitude={location.location.lat}
          longitude={location.location.lng}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>Delivery Man {location.deliveryManId}</div>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
