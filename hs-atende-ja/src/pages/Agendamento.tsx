// src/pages/Agendamento.tsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "./Agendamento.css"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.55052,
  lng: -46.633308
};

const markers = [
  {
    id: 1,
    name: "Clinica Santo Amaro",
    position: { lat: -23.5952366, lng: -46.6469491 }
  },
  {
    id: 2,
    name: "Rede Protege +",
    position: { lat: -23.5632698, lng: -46.5945727 }
  },
  {
    id: 3,
    name: "Clinica Saúde Em Primeiro Lugar",
    position: { lat: -23.5448216, lng: -46.5953351 }
  }
];

const Agendamento: React.FC = () => {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        error => console.error(error)
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAkBw5ZyUeP0FYNWyhlREMJR-yb_yZcGFs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || center}
        zoom={10}
      >
        {userLocation && (
          <Marker
            position={userLocation}
            label="Você está aqui"
            icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          />
        )}
        {markers.map(marker => (
          <Marker key={marker.id} position={marker.position} label={marker.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Agendamento;
