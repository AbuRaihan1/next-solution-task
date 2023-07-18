import React from "react";

const Title = ({ titleText }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold py-6 text-white text-center">
        {titleText}
      </h2>
    </div>
  );
};

export default Title;
