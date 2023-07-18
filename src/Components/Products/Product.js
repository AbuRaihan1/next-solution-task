import React, { useState } from "react";

const Product = ({ product }) => {
  const { Rating, description, image, price, title } = product;
  console.log(product);
  const maxLengthToShow = 20;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shortenedDescription = description
    .split(" ")
    .slice(0, maxLengthToShow)
    .join(" ");
  return (
    <div>
      <div className="card min-h-[530px] card-compact w-100 m-5 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-xl font-bold">{title}</h2>

          <p className="text-base text-justify">
            {isExpanded ? description : shortenedDescription}
            {description.length > maxLengthToShow && (
              <button onClick={toggleDescription}>
                {isExpanded ? (
                  <>
                    <span className="text-secondary font-bold text-lg ml-2 hover:underline">
                      Read Less
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-secondary font-bold text-lg ml-2 hover:underline">
                      Read more...
                    </span>
                  </>
                )}
              </button>
            )}
          </p>

          <div className="card-actions justify-between items-center ">
            <div className="text-gray-300 font-bold text-lg">
              <p>Rating: {Rating}</p>
              <p>Price: {price}</p>
            </div>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
