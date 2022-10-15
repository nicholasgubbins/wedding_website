import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import rings from '../images/wedding-rings.svg';
import pizza from '../images/pizza.svg';



export default class SicilyMap extends React.Component {
  state = {
    lat: 37.0833,
    lng: 15.1520,
    zoom: 10
  };


  render() {
    const style = {
      width: "calc(100% - 1rem)",
      height: "27.5rem"
    };

    const position = [this.state.lat, this.state.lng];


    if (typeof window !== "undefined") {
      const ringsicon = new L.Icon({
        iconUrl: rings,
        iconRetinaUrl: rings,
        iconSize: [32,32],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
      });

      const pizzaicon = new L.Icon({
        iconUrl: pizza,
        iconRetinaUrl: pizza,
        iconSize: [32,32],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
      });

      return (
        <MapContainer
          style={style}
          preferCanvas={true}
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom="18"
            minZoom="8"
          />
          <Marker position={[37.1085, 15.0553]} icon = {ringsicon}>
            <Popup>
              <b>The venue!</b>
              <br />
              Borgo Del Carato
            </Popup>
          </Marker>

          <Marker position={[37.0603, 15.2932]} icon={pizzaicon}>
            <Popup>
            <b>Pizza Party</b>
              <br />
              Pescomare
            </Popup>
          </Marker>

        </MapContainer>
      );
    } else {
      return null;
    }
  }
}
