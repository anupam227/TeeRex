import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./Cart.scss";
import {
  itemDecrement,
  itemIncrement,
  loadCart,
  removeFromCart,
} from "../redux/actions/productAction";
import MobileMenu from "../MobileMenu/MobileMenu";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const [isShowError, setIsShowError] = useState(false);

  const dispatch = useDispatch();
  let totalPrice = 0;
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  setTimeout(() => {
    setIsShowError(false);
  }, 4000);

  const empty = (
    <div className="empty">
      <div className="empty-container">
        <p className="empty-container-text">My Cart</p>
        <div className="empty-container-box">
          <img
            className="empty-container-box-image"
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          />
          <p className="empty-container-box-message">Missing Cart items?</p>
          <span className="empty-container-box-text">
            Add items to checkout
          </span>
        </div>
      </div>
    </div>
  );
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleDecrement = (id) => {
    dispatch(itemDecrement(id));
  };
  const handleIncrement = (id, index) => {
    const check =
      products.cart[index].count === products.cart[index].item["quantity"];
    if (check) {
      setIsShowError(true);
    } else {
      dispatch(itemIncrement(id));
    }
  };

  const product = products?.cart?.map((item, index) => {
    totalPrice += item?.item?.price * item.count;
    return (
      <div key={index} className="product">
        <div className="product-container">
          <div className="product-container-left">
            <img
              className="product-container-left-image"
              src={item?.item?.imageURL}
            />
            <div className="product-container-left-counter">
              <button
                disabled={item?.count > 0 ? false : true}
                onClick={() => handleDecrement(item.item?.id)}
                className="product-container-left-counter-less"
              >
                -
              </button>
              <span className="product-container-left-counter-count">
                {item?.count}
              </span>
              <button
                disabled={item?.count <= item?.item?.quantity ? false : true}
                onClick={() => handleIncrement(item?.item?.id, index)}
                className="product-container-left-counter-more"
              >
                +
              </button>
            </div>
          </div>
          <div className="product-container-right">
            <div className="product-container-right-name">
              <span className="product-container-right-name-text">
                {item?.item?.name}
              </span>
            </div>
            <div className="product-container-right-rates">
              <span className="product-container-right-rates-actual">
                &#8377;{item?.item?.price}
              </span>
            </div>
            <div className="product-container-right-options">
              <span
                onClick={() => handleRemove(item?.item?.id)}
                className="product-container-right-options-second"
              >
                REMOVE
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="cart">
        <NavBar />
        {/* {isShowError && ( */}
        <span className={`error-msg ${isShowError && "error-style"}`}>
          Cannot add more then available quantity
        </span>
        {/* )} */}
        <div className="cart-container">
          {products?.cart.length ? (
            <div className="cart-container-box">
              <div className="cart-container-box-items">
                <div className="cart-container-box-items-top">
                  <span className="cart-container-box-items-top-text">
                    My Cart &#40;{products?.cart.length}&#41;
                  </span>
                </div>
                <div className="cart-container-box-items-products">
                  {product}
                </div>
              </div>
              <div className="cart-container-box-amount">
                <div className="cart-container-box-amount-top">
                  <span className="cart-container-box-amount-top-text">
                    PRICE DETAILS
                  </span>
                </div>
                <div className="cart-container-box-amount-box">
                  <div className="cart-container-box-amount-box-cal">
                    <span className="cart-container-box-amount-box-cal-price">
                      Price ({products.cart.length} item)
                    </span>
                  </div>
                </div>
                <div className="cart-container-box-amount-total">
                  <span className="cart-container-box-amount-total-text">
                    Total Amount
                  </span>
                  <span className="cart-container-box-amount-total-rate">
                    &#8377;{totalPrice}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            empty
          )}
        </div>
      </div>
      <MobileMenu />
    </>
  );
};
export default Cart;
