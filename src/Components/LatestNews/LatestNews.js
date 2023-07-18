import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import News from "./News";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch("/latestnews.json")
      .then((res) => res.json())
      .then((data) => {
        const firstFiveItems = data.slice(0, 6);
        setNewsData(firstFiveItems);
      });
  }, []);
  return (
    <>
      <Title titleText="Latest News" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <News news={news} key={news.id} />
        ))}
      </div>
      <div className="block text-center my-5">
        <Link
          to="/allNews"
          className="btn btn-secondary md:w-1/2 w-11/12	 mx-auto mb-12"
        >
          See more
        </Link>
      </div>
    </>
  );
};

export default LatestNews;
