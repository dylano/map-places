import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MapContainer from "./MapContainer";
import "./App.css";

class App extends Component {
  state = {
    user: {
      name: "Dylan Oliver",
      img: "https://s.gravatar.com/avatar/7d06dc0f5b25c64d3945595e83a0c7bd?s=80"
    },
    apiKey: "AIzaSyBmWBXDxJdQhNqBCESzje6X3VZ5jO3loBg",
    places: [{ cityName: "Half Moon Bay", lat: 37.464, lng: -122.4414 }]
  };

  getCityName = (lat, lng) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
          this.state.apiKey
        }`
      )
        .then(data => data.json())
        .then(locationData => {
          console.log(locationData);
          resolve(locationData.plus_code.compound_code);
        });
    });
  };

  onMapClicked = async (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    const cityName = await this.getCityName(lat, lng);
    if (cityName) {
      this.setState({
        places: [...this.state.places, { cityName, lat, lng }]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Sidebar user={this.state.user} places={this.state.places} />
        <MapContainer
          places={this.state.places}
          onMapClicked={this.onMapClicked}
        />
      </div>
    );
  }
}

export default App;
