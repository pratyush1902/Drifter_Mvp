'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon definition
const CustomIcon = L.icon({
  iconUrl: '/pin.png', // Replace with the path to your custom icon
  iconSize: [40, 40], // Adjust size as needed
  iconAnchor: [20, 40], // Anchor point to align the icon
  popupAnchor: [0, -40], // Position the popup relative to the icon
});

const ZoomToBounds = ({ destinations }) => {
  const map = useMap();

  if (destinations.length > 0) {
    const bounds = L.latLngBounds(
      destinations.map((destination) => [
        destination.attributes.Latitude,
        destination.attributes.Longitude,
      ])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }

  return null;
};

const Map = ({ destinations }) => {
  // Filter out destinations without valid coordinates
  const validDestinations = destinations.filter(
    (destination) =>
      destination.attributes.Latitude !== null &&
      destination.attributes.Longitude !== null
  );

  // Default position if no markers exist
  const defaultPosition = [20.5937, 78.9629]; // Center of India

  return (
    <div style={{ height: '500px', width: '100%' }}>
      {validDestinations.length === 0 ? (
        <p className="text-center text-gray-500 py-20">No locations available</p>
      ) : (
        <MapContainer
          center={defaultPosition}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Zoom to bounds */}
          <ZoomToBounds destinations={validDestinations} />

          {validDestinations.map((destination, index) => (
            <Marker
              key={index}
              position={[
                destination.attributes.Latitude,
                destination.attributes.Longitude,
              ]}
              icon={CustomIcon} // Apply the custom icon
            >
              <Popup>
                <strong>{destination.attributes.Name}</strong>
                <br />
                {destination.attributes.Description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
