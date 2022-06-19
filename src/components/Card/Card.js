import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/productAction";
import "./Card.scss";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <div key={props.product.item.id} className="card">
      <div className="card-container">
        <img
          className="card-container-top-image"
          src={props.product.item.imageURL}
        />
        <div className="card-container-bottom">
          <p className="card-container-bottom-product">
            {props.product.item.name}
          </p>
          <div className="card-container-bottom-price">
            <span className="card-container-bottom-price-actual">
              &#8377;{props.product.item.price}
            </span>
            <button
              disabled={props.product.count > 0 ? true : false}
              onClick={() => addCart(props.product)}
              className="card-container-bottom-price-cart"
            >
              {" "}
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
