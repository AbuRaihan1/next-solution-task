import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <LatestNews />
    </div>
  );
};

export default Home;
