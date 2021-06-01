import React, { Component } from "react";
import { connect } from "react-redux";
import FavoritesContainer from "../containers/FavoritesContainer";

const API = "http://localhost:3001/api/v1/users/";

class Favorites extends Component {
  componentDidMount() {
    fetch(API + this.props.authUser.id + "/favorites", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => console.log(resObj));
  }

  render() {
    if (this.props.favorites.length > 0) {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <FavoritesContainer favorites={this.props.favorites} />
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        </div>
      );
    } else {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-2xl text-gray-500">You have no favorites</div>
          </div>
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
