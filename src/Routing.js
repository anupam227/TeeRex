import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./app";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
export default Routing;
