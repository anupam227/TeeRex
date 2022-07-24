import axios from "axios";
import { CART, GET_PRODUCTS } from "../../config/api";
import * as actions from "./types";

export const loadProducts = () => (dispatch) => {
  // product loading
  dispatch({
    type: actions.PRODUCTS_LOADING,
  });
  axios
    .get(GET_PRODUCTS)
    .then((res) => {
      dispatch({
        type: actions.PRODUCTS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log("error loading products");
    });
};
export const addToCart = (items) => (dispatch) => {
  const cartAdd = JSON.parse(localStorage.getItem("cart")) || [];
  let item = items.item;
  let checkDuplicateItem = false;
  let temp = [];
  //checks if item already present in cart or not
  temp = cartAdd.map((itm) => {
    if (itm.item.id !== item.id) {
      return itm;
    } else {
      checkDuplicateItem = true;
      return itm;
    }
  });
  //if not then push the item in cart
  if (!checkDuplicateItem) {
    temp.push({ item, count: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(temp));
  try {
    dispatch({
      type: actions.ADD_TO_CART,
      payload: temp,
    });
  } catch {
    // console.log("error adding to cart");
  }
};

export const loadCart = () => (dispatch) => {
  try {
    dispatch({
      type: actions.CART_LOADED,
    });
  } catch {
    // console.log("error loading products");
  }
};
export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({
      type: actions.REMOVE_CART,
      payload: id,
    });
  } catch {
    // console.log("error removing products");
  }
};
export const itemDecrement = (id) => (dispatch) => {
  const cartMinus = JSON.parse(localStorage.getItem("cart")) || [];
  //dcrement the count of an item using loop
  let tempcart = cartMinus.map((item) => {
    if (item.item.id === id && item.count > 1) {
      return { item: item.item, count: item.count - 1 };
    } else if (item.item.id !== id) return item;
  });
  //filter out all the undefined values get from above map function
  const results = tempcart.filter((element) => {
    return element !== undefined;
  });
  localStorage.setItem("cart", JSON.stringify(results));
  try {
    dispatch({
      type: actions.ITEM_DECREMENT,
      payload: results,
    });
  } catch {
    // console.log("Can't decrease the count more");
  }
};
export const itemIncrement = (id) => (dispatch) => {
  try {
    dispatch({
      type: actions.ITEM_INCREMENT,
      payload: id,
    });
  } catch {
    // console.log("Limit excced");
  }
};
