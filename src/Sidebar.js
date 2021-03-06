import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ user, places, onRemovePlace }) => {
  const placeList = places.map(place => (
    <li className="sidebar-placelist-item" key={place.lat}>
      <span>{place.cityName}</span>
      <span>
        <a
          className="sidebar-placelist-remove-btn"
          onClick={() => onRemovePlace(place.cityName)}
        >
          x
        </a>
      </span>
    </li>
  ));

  return (
    <div className="App-sidebar">
      <div className="sidebar-title">
        <h1>My Favorite Places</h1>
      </div>
      <div className="sidebar-placelist">
        <div className="sidebar-list-title">List of places</div>
        <ul>{placeList}</ul>
      </div>
      <div className="sidebar-user">
        <div className="sidebar-user-title">Created by:</div>
        <div className="sidebar-user-info">
          <span className="sidebar-user-img">
            <img src={user.img} alt="Gravatar" />
          </span>
          <span className="sidebar-user-name">{user.name}</span>
          <span />
        </div>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired,
  onRemovePlace: PropTypes.func.isRequired
};

export default Sidebar;
