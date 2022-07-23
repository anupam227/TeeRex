import React, { useEffect } from "react";
import "./Products.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Products = ({ filteredData, setFilteredData, isFiltersVisible }) => {
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    setFilteredData(products);
  }, [products]);
  return (
    <div className={`products ${isFiltersVisible && "isView"}`}>
      <div className="products-container">
        <div className="products-container-products">
          {filteredData.length &&
            filteredData.map((item) => {
              return <Card key={item.item.id} product={item} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Products;
