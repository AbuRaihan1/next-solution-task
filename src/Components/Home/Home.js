import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";
import Blog from "../Blog/blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <LatestNews />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
