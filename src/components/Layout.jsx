import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div>
      <Outlet />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
