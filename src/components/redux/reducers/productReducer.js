import * as actions from "../actions/types";

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.PRODUCTS_LOADED:
      const products = action.payload.map((item) => {
        return { item, count: 0 };
      });
      return {
        ...state,
        isLoading: false,
        products: products,
      };
    case actions.CART_LOADED:
      const cartLoad = JSON.parse(localStorage.getItem("cart")) || [];
      return {
        ...state,
        cart: [...cartLoad],
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case actions.ITEM_DECREMENT:
      return {
        ...state,
        cart: [...action.payload],
      };
    case actions.ITEM_INCREMENT:
      const cartPlus = JSON.parse(localStorage.getItem("cart")) || [];
      let tempCart = cartPlus.map((item) => {
        if (item.item.id === action.payload) {
          return { item: item.item, count: item.count + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(tempCart));
      return {
        ...state,
        cart: [...tempCart],
      };
    case actions.REMOVE_CART:
      const cartRemove = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItem = cartRemove.filter(
        (item) => item.item?.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(cartItem));
      return {
        ...state,
        cart: [...cartItem],
      };
    default:
      return state;
  }
}
