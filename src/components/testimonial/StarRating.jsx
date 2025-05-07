import React from "react";
import star from "/images/star.svg";
import emptyStar from "/images/emptyStar.svg";

function StarRating({ rating }) {
  return (
    <div className=" flex items-center mb-6">
      {Array.from({ length: 5 }, (_, index) => (
        <Star full={rating >= index + 1} />
      ))}
    </div>
  );
}

export default StarRating;

const Star = ({ full }) => {
  return (
    <span>
      <img
        src={full ? star : emptyStar}
        alt=""
        className=" bg-gray-900 dark:bg-transparent"
      />
    </span>
  );
};
