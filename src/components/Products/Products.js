import React, { useEffect } from "react";
import "./Products.scss";
import Card from "../Card/Card";
import useProductFilteredData from "../../hooks/useProductFilteredData";
import { useSelector } from "react-redux";

const Products = ({ filteredData, setFilteredData }) => {
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    setFilteredData(products);
  }, [products]);
  return (
    <div className="products">
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
