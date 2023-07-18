import React from "react";
import Title from "../Title/Title";
import News from "./News";
import { Link } from "react-router-dom";
const newsData = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus non justo vitae quam tristique bibendum. Curabitur euismod euismod nulla, vitae tincidunt urna dignissim eu. Integer eu magna libero. Nulla facilisi. Donec laoreet rhoncus lectus, nec porttitor nisi lacinia ut. Mauris vitae arcu tincidunt, consectetur erat eu, mattis purus.",
  },
  {
    id: 2,
    title: "Amet Consectetur Adipiscing Elit",
    content:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    title: "Nulla Facilisi Phasellus Non Justo",
    content:
      "Nulla facilisi phasellus non justo vitae quam tristique bibendum. Curabitur euismod euismod nulla, vitae tincidunt urna dignissim eu. Integer eu magna libero. Donec laoreet rhoncus lectus, nec porttitor nisi lacinia ut. Mauris vitae arcu tincidunt, consectetur erat eu, mattis purus.",
  },
  {
    id: 4,
    title: "Duis Aute Irure Dolor",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    title: "Consectetur Adipiscing Elit Sed Do",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 6,
    title: "Nulla Facilisi Phasellus Non Justo",
    content:
      "Nulla facilisi phasellus non justo vitae quam tristique bibendum. Curabitur euismod euismod nulla, vitae tincidunt urna dignissim eu. Integer eu magna libero. Donec laoreet rhoncus lectus, nec porttitor nisi lacinia ut. Mauris vitae arcu tincidunt, consectetur erat eu, mattis purus.",
  },
];

const LatestNews = () => {
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
