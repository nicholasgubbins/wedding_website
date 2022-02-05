import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import rings from '../images/wedding-rings.svg';
import party from '../images/party.png';
import donut from '../images/donut.svg';



export default class kansasCityMap extends React.Component {
  state = {
    lat: 39.0997,
    lng: -94.5786,
    zoom: 10
  };


  render() {
    const style = {
      width: "calc(100% - 1rem)",
      height: "27.5rem"
    };

    const position = [this.state.lat, this.state.lng];
    if (typeof window !== 'undefined') {
      const ringsicon = new L.Icon({
        iconUrl: rings,
        iconRetinaUrl: rings,
        iconSize: [32,32],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
      });

      const partyicon = new L.Icon({
        iconUrl: party,
        iconRetinaUrl: party,
        iconSize: [32,32],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
      });

      const donuticon = new L.Icon({
        iconUrl: donut,
        iconRetinaUrl: donut,
        iconSize: [25,25],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
      });
}

    if (typeof window !== "undefined") {
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
          <Marker position={[39.04482, -94.57306]} icon = {ringsicon}>
            <Popup>
              <b>The venue!</b>
              <br />
              Fire House KC
            </Popup>
          </Marker>
          <Marker position={[39.30377, -94.70923]}>
            <Popup>MCI Airport</Popup>
          </Marker>
          <Marker position={[39.08809, -94.58744]}>
            <Popup>Crossroads Hotel</Popup>
          </Marker>
          <Marker position={[39.04670, -94.58648]}>
            <Popup>Kansas City Marriott Country Club Plaza</Popup>
          </Marker>
          <Marker position={[39.04353, -94.58459]}>
            <Popup>Southmoreland on the Plaza</Popup>
          </Marker>
          <Marker position={[39.03993, -94.59224]}>
            <Popup>InterContinental Kansas City at the Plaza</Popup>
          </Marker>
          <Marker position={[39.04886, -94.58228]}>
            <Popup>The Truitt</Popup>
          </Marker>
          <Marker position={[39.04643, -94.59739]}>
            <Popup>SpringHill Suites by Marriott Kansas City Plaza</Popup>
          </Marker>
          <Marker position={[39.04396, -94.59117]}>
            <Popup>Residence Inn by Marriott Kansas City Country Club Plaza</Popup>
          </Marker>
          <Marker position={[39.04859, -94.58134]}>
            <Popup>Oak Street Mansion</Popup>
          </Marker>
          <Marker position={[39.04463, -94.59657]}>
            <Popup>Hampton Inn & Suites Kansas City-Country Club Plaza</Popup>
          </Marker>
          <Marker position={[38.98999, -94.58006]} icon={partyicon}>
            <Popup>
            <b>Welcome Party</b>
              <br />
              Our House
            </Popup>
          </Marker>
          <Marker position={[39.03143, -94.59426]} icon={donuticon}>
            <Popup>
            <b>Coffee & Donuts</b>
              <br />
              Loose Park
            </Popup>
          </Marker>
        </MapContainer>
      );
    } else {
      return null;
    }
  }
}
