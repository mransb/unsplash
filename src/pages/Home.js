import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";
import "../styles/Home.css";

class Home extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
      }
    );

    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-start bg-light background">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Unsplash</h1>
            <p className="lead fw-normal">
              The internet’s source of freely-usable images. Powered by creators
              everywhere.
            </p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block">
            <SearchBar className="searchbar" onSubmit={this.onSearchSubmit} />
          </div>
        </div>
        <div className="container">
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Home;
