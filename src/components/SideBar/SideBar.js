import React, { useState } from "react";
import "./SideBar.scss";
import { isEmpty } from "lodash";
const SideBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    // add to list
    let { filter } = filters;
    if (e.target.checked) {
      filter = [...filter, e.target.value];
    } else {
      // remove from list
      filter = filter.filter((item) => item !== e.target.value);
    }
    setFilters({ ...filters, ["filter"]: filter, ["filterType"]: "filter" });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-container-filter">
          <div className="sidebar-container-filter-top">
            <p className="sidebar-container-filter-top-text">filters</p>
          </div>
        </div>
        <div className="sidebar-container-colour">
          <div className="sidebar-container-colour-box">
            <p className="sidebar-container-colour-box-text">Colour</p>
          </div>
          <ul className="sidebar-container-colour-list">
            {[
              "Black",
              "White",
              "Blue",
              "Pink",
              "Green",
              "Grey",
              "Purple",
              "Red",
              "Yellow",
            ].map((item, index) => {
              return (
                <li
                  key={index}
                  className="sidebar-container-colour-list-option"
                >
                  <input
                    value={item}
                    onChange={handleChange}
                    className="sidebar-container-colour-list-option-input"
                    type="checkbox"
                  />
                  <p className="sidebar-container-colour-list-option-text">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-container-gender">
          <div className="sidebar-container-gender-box">
            <p className="sidebar-container-gender-box-text">Gender</p>
          </div>
          <ul className="sidebar-container-gender-list">
            {["Men", "Women"].map((item, index) => {
              return (
                <li
                  key={index}
                  className="sidebar-container-gender-list-option"
                >
                  <input
                    value={item}
                    onChange={handleChange}
                    className="sidebar-container-gender-list-option-input"
                    type="checkbox"
                  />
                  <p className="sidebar-container-gender-list-option-text">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-container-price">
          <div className="sidebar-container-price-box">
            <p className="sidebar-container-price-box-text">Price</p>
          </div>
          <ul className="sidebar-container-price-list">
            <li className="sidebar-container-price-list-option">
              <input
                value="250"
                onChange={handleChange}
                className="sidebar-container-price-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-price-list-option-text">
                0-Rs250
              </p>
            </li>
            <li className="sidebar-container-price-list-option">
              <input
                value="450"
                onChange={handleChange}
                className="sidebar-container-price-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-price-list-option-text">
                Rs251-450
              </p>
            </li>
            <li className="sidebar-container-price-list-option">
              <input
                value="500"
                onChange={handleChange}
                className="sidebar-container-price-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-price-list-option-text">Rs500</p>
            </li>
          </ul>
        </div>
        <div className="sidebar-container-type">
          <div className="sidebar-container-type-box">
            <p className="sidebar-container-type-box-text">Type</p>
          </div>
          <ul className="sidebar-container-type-list">
            <li className="sidebar-container-type-list-option">
              <input
                value="Polo"
                onChange={handleChange}
                className="sidebar-container-type-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-type-list-option-text">Polo</p>
            </li>
            <li className="sidebar-container-type-list-option">
              <input
                value="Hoodie"
                onChange={handleChange}
                className="sidebar-container-type-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-type-list-option-text">Hoodie</p>
            </li>
            <li className="sidebar-container-type-list-option">
              <input
                value="Round"
                onChange={handleChange}
                className="sidebar-container-type-list-option-input"
                type="checkbox"
              />
              <p className="sidebar-container-type-list-option-text">Round</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
