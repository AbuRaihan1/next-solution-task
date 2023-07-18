import React from "react";
import "./Banner.css";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: banner1,
      prev: 4,
      id: 1,
      next: 2,
      title: (
        <>
          Welcome to, <br /> next salution
        </>
      ),
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
      title: (
        <>
          {" "}
          We are providing <br /> World Class it services
        </>
      ),
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 4,
      title: (
        <>
          you can choose <br /> our services <br /> for grow you business
        </>
      ),
    },
  ];
  return (
    <div className="carousel w-full md:w-[96%] md:mx-[2%] mt-4">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Banner;
