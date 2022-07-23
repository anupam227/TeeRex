import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ filters, setFilters, filteredData }) => {
  const [searchText, setSearchText] = useState("");
  const currentPage = useLocation();

  useEffect(() => {
    setSearchText("");
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearchText(value);
    setFilters({ ...filters, [name]: value, ["filterType"]: name });
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          <div className="navbar-container-left-logo">
            <Link to="/" className="navbar-container-left-logo-text">
              TeeRex Store
            </Link>
          </div>
          <div className="navbar-container-left-searchbar">
            <div className="navbar-container-left-searchbar-box">
              <input
                className="navbar-container-left-searchbar-box-input"
                type="text"
                name="search"
                onChange={handleChange}
                value={searchText}
                placeholder="Search for products, brands and more"
              />
              <span className="navbar-container-left-searchbar-box-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-container-right">
          <p className="navbar-container-right-products">Products</p>
          <Link to="/cart" className="navbar-container-right-cart">
            <span className="navbar-container-right-cart-icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
            <p className="navbar-container-right-cart-text">Cart</p>
          </Link>
        </div>
        {currentPage.pathname !== "/cart" && (
          <div className="navbar-container-mobile">
            <div className="navbar-container-mobile-searchbar">
              <input
                className="navbar-container-mobile-searchbar-input"
                type="text"
                name="search"
                onChange={handleChange}
                value={searchText}
                placeholder="Search for products, brands and more"
              />
              <span className="navbar-container-mobile-searchbar-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
