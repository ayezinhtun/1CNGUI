import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout({ children }) {
  
  return (
    <div>
      
         
      <Navbar/>
      <main>{children}</main>
      <Footer />
      <Outlet />
    </div>
  );
}
