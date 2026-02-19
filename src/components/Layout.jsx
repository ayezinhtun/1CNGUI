import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AnnouncementBanner from "./AnnouncementBanner";

export function Layout({ children }) {
  
    const [bannerHeight, setBannerHeight] = useState(0);
  return (
    <div>

      
      
      {/* <AnnouncementBanner onBannerHeight={setBannerHeight} /> */}
      {/* <AnnouncementBanner/> */}
      {/* <Navbar/> */}
        <Navbar bannerHeight={bannerHeight} />
      <main>{React.cloneElement(children, { bannerHeight })}</main>
      <Footer />
      <Outlet />
    </div>
  );
}
