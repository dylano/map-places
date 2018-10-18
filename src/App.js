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
    apikey: "AIzaSyBmWBXDxJdQhNqBCESzje6X3VZ5jO3loBg"
  };

  render() {
    return (
      <div className="App">
        <Sidebar user={this.state.user} />
        <MapContainer />
      </div>
    );
  }
}

export default App;
