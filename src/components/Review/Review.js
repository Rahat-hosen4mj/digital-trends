import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-16 py-14 mx-auto">
      <div className="flex flex-wrap mx-2">
          {
            reviews.map(review => <ReviewDetail review={review} key={review.id}></ReviewDetail>)
          }
        </div>
      </div>
    </section>
  );
};

export default Review;
