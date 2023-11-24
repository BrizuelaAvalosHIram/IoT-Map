import React from "react";
import 'leaflet/dist/leaflet.css';
import{ MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";


const MapView = () => {
    
    return(
    <div style={{ display : "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ flex:"0"}}>
            <h1>Mapa</h1>
        </div>
    <div style={{flex:"1", width: "70vw", height: "50vh", margin:"20px"}}>
     <MapContainer center={{lat: "19.2459", lng:"-103.7529"}} 
                    zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers />
    </MapContainer>
    </div>
    </div>
    );
}

export default MapView;