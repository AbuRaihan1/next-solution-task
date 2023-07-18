import React from "react";

const ShowAllData = ({ news }) => {
  const { title, content } = news;
  return (
    <div className="card w-100 m-5 bg-gray-700">
      <div className="card-body">
        <h2 className="font-bold text-center block text-white text-xl">
          {title}
        </h2>
        <p className="text-justify text-white mt-5">{content}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ShowAllData;
