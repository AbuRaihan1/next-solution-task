import React, { useState } from "react";

const Product = ({ product }) => {
  const { Rating, description, image, price, title } = product;
  console.log(product);
  const maxLengthToShow = 30;
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
      <div className="card card-compact w-100 m-5 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>
        {isExpanded ? description : shortenedDescription}
        {description.length > maxLengthToShow && (
          <button onClick={toggleDescription}>
            {isExpanded ? 'Read less...' : 'Read more...'}
          </button>
        )}
      </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
