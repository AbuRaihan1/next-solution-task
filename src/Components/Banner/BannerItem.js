import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next, title } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full md:w-full h-full"
    >
      <div className="carousel-img">
        <img src={image} alt="a" className="w-screen rounded-2xl h-screen " />
      </div>
      <div className="absolute transform left-20 top-14">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <button className="mt-5 btn block btn-active btn-secondary">
          Get Started
        </button>
      </div>
      <div className="absolute flex justify-end w-2/5 transform left-20 top-64"></div>

      <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-12 bottom-24">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
