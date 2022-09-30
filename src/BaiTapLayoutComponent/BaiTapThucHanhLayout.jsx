import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./style.css";
import Footer from "./Footer";

const BaiTapThucHanhLayout = () => {
  return (
    <div>
      <header className="bg-dark">
        <div className="container">
          <Header />
        </div>
      </header>
      <Body />
      <Footer />
    </div>
  );
};

export default BaiTapThucHanhLayout;
