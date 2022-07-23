import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";

export default function MobileMenu({ filterIconClick, isFiltersVisible }) {
  return (
    <div className="menu">
      <div className="menu-container">
        <Link to="/" className="menu-container-icon">
          <i class="fa fa-home" aria-hidden="true"></i>
        </Link>
        <div
          onClick={() => filterIconClick(!isFiltersVisible)}
          className="menu-container-icon"
        >
          <i class="fa fa-filter" aria-hidden="true"></i>
        </div>
        <Link to="/cart" className="menu-container-icon">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}
