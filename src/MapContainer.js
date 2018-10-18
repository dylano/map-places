import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    markers: [{ lat: 37.464, lng: -122.4414 }, { lat: 40, lng: -100 }]
  };

  onMapClicked(mapProps, map, clickEvent) {
    console.log(clickEvent, clickEvent.latLng.lat(), clickEvent.latLng.lng());
  }

  render() {
    const style = {
      width: "100%",
      height: "100%"
    };

    const markers = this.state.markers.map((marker, idx) => (
      <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} />
    ));

    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={style}
        initialCenter={{
          lat: 40,
          lng: -100
        }}
        onClick={this.onMapClicked}
      >
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmWBXDxJdQhNqBCESzje6X3VZ5jO3loBg"
})(MapContainer);
