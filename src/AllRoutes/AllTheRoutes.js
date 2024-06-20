import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Cart } from "../pages";
export const AllTheRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
