// src/MapPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Manually set the marker icons to use local files
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: `/leaflet/marker-icon-2x.png`,
  iconUrl: `/leaflet/marker-icon.png`,
  shadowUrl: `/leaflet/marker-shadow.png`
});

const MapPage = () => {
  const location = useLocation();
  const { name, lat, lng } = location.state || {};

  if (!lat || !lng) {
    return <div>Country coordinates not available.</div>;
  }

  return (
    <div className='mapdiv'>
      {/* <h1>Map Location for {name}</h1> */}
      <MapContainer center={[lat, lng]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
