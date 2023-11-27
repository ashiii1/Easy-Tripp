import React, { useCallback } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
  const handleMapChange = useCallback((e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  }, [setCoordinates, setBounds]);

  const customIcon = new L.Icon({
    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYQcQ89VFFbyXUrv2uOhykPSgVr5ub52hR5gkAQA&s', // Replace with the path to your custom marker icon
    iconSize: [32, 32], // Adjust the size of the icon
    iconAnchor: [16, 32], // Adjust the anchor point of the icon
    popupAnchor: [0, -32], // Adjust the anchor point for popups
  });

  // Check if coordinates are provided, if yes, display a single marker map
  if (coordinates && coordinates.lat && coordinates.lng) {
    return (
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={14}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>
          <Popup>
            <div className="font-semibold p-1 shadow-md text-center w-fit transition ease-in duration-1000 rounded-sm overflow-hidden bg-white">
              <p>Custom Location</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }

  // Otherwise, display the map with places
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={handleMapChange}
    >
      {/* Your existing code for displaying places on the map */}
    </GoogleMapReact>
  );
};

export default Map;
