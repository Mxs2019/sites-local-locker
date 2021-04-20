import classnames from "classnames";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ReviewsResponse } from "../../types";

type Props = {
  //Insert Props Here
  className?: string;
  reviewData?: ReviewsResponse;
  loading: boolean;
  error: Error;
};

const stringToRating = (
  strRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE"
) => {
  switch (strRating) {
    case "ONE":
      return 1;
    case "TWO":
      return 2;
    case "THREE":
      return 3;
    case "FOUR":
      return 4;
    case "FIVE":
      return 5;

    default:
      return 5;
  }
};

const ReviewsWidget = ({ className, reviewData, loading, error }: Props) => {
  return (
    <div className={classnames(className)}>
      <div className="flex items-center justify-between">
        <h2>Customer Reviews</h2>
        {reviewData && (
          <div className="flex items-center">
            <ReviewStars rating={reviewData.average_rating_all_locations} />
            <div className="ml-2">{reviewData.total_reviews_count} Reviews</div>
          </div>
        )}
      </div>
      {loading && <div>spinner</div>}
      {!loading && !error && (
        <div>
          <div>
            {reviewData?.reviews.map((r) => (
              <div className="flex mb-2 border-b pb-2">
                <div className="w-1/3">{r.reviewer.displayName}</div>
                <div className="w-2/3 ml-2">
                  <ReviewStars rating={stringToRating(r.starRating)} />
                  <p className="mt-2">{r.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewStars = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex">
      {[...Array(roundedRating)].map((_, i) => {
        return <FaStar key={i} />;
      })}
      {[...Array(5 - roundedRating)].map((_, i) => {
        return <FaRegStar key={i} />;
      })}
    </div>
  );
};

export default ReviewsWidget;
