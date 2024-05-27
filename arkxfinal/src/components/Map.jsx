import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import io from 'socket.io-client';

// Configure the WebSocket connection
const socket = io('http://localhost:3000');

const Map = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    // Listen for location updates from the server
    socket.on('locationUpdate', (data) => {
      setLocation(data.location);
    });

    return () => {
      // Clean up the socket connection when the component is unmounted
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <MapContainer center={location} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={location} icon={new L.Icon.Default()}>
        <Popup>Delivery person is here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
