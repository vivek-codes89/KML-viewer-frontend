import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function KmlMap({ kmlData }) {
    const defaultPosition = [0, 0];
    const zoom = 2;

    return (
        <MapContainer 
            center={defaultPosition} 
            zoom={zoom} 
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            {kmlData && kmlData.elements.map((element, index) => {
                if (element.type === 'LineString') {
                    return (
                        <Polyline
                            key={index}
                            positions={element.coordinates}
                            color="blue"
                        />
                    );
                }
                return null;
            })}
        </MapContainer>
    );
}

export default KmlMap;