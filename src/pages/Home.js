import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Card, Button, Space } from "antd";
const clientID = `?client_id=${process.env.REACT_APP_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function Home() {
  window.onload = function () {
    // Get the input field
    var input = document.getElementById("myInput");

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button-addon2").click();
      }
    });
  };

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

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
        <div className="d-flex justify-content-center">
          <Space className="col-lg-6">
            <div class="input-group mb-3">
              <input
                id="myInput"
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </Space>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {photos.map((image, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-4 d-flex justify-content-center"
            >
              <Card
                cover={
                  <img
                    src={image.urls.regular}
                    className="gallery-img"
                    alt="Image"
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
