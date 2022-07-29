import React from "react";
import FirstSection from "../components/first-section/FirstSection";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import Navbar from "../components/navbar/Navbar";

const Top = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <Navbar />
      <NavbarBottom />
      {/* <FirstSection /> */}
    </div>
  );
};

export default Top;
