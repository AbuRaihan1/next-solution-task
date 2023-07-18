import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import ShowAllData from "./ShowAllData";

const AllNews = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("/latestnews.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Title titleText="Latest all news" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allData.map((news) => (
          <ShowAllData news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
