import React, { Component } from "react";
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render(props) {
    const style = {
      width: "100%",
      height: "100%"
    };

    const markers = this.props.places.map((marker, idx) => (
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
        onClick={this.props.onMapClicked}
      >
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmWBXDxJdQhNqBCESzje6X3VZ5jO3loBg"
})(MapContainer);
