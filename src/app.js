import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import { loadProducts } from "./components/redux/actions/productAction";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return <Home />;
}
