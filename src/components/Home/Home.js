import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useProductFilteredData from "../../hooks/useProductFilteredData";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import { loadProducts } from "../redux/actions/productAction";
import SideBar from "../SideBar/SideBar";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const products = useSelector((state) => state.products.products);
  const { filteredData, setFilteredData, filters, setFilters } =
    useProductFilteredData(products);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return (
    <div className="main">
      <NavBar
        filters={filters}
        setFilters={setFilters}
        filteredData={filteredData}
      />
      <div className="main-bottom">
        <SideBar
          filters={filters}
          setFilters={setFilters}
          isFiltersVisible={isFiltersVisible}
        />
        <Products
          isFiltersVisible={isFiltersVisible}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <MobileMenu
        filterIconClick={setIsFiltersVisible}
        isFiltersVisible={isFiltersVisible}
      />
    </div>
  );
};
export default Home;
