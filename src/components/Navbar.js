import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/unsplash_logo.png"
            className="logo"
            alt=""
            width="30px"
            height="30px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <form class="d-flex" role="search">
              <input
                id="myInput"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Advertise
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <button type="button" class="btn btn-outline-secondary" disabled>
              Submit a photo
            </button>
            <div className="d-flex align-items-center px-2">
              <i className="bi bi-bell-fill"></i>
            </div>
            <div className="d-flex align-items-center px-2">
              <i className="bi bi-person-circle"></i>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
