import classnames from "classnames";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { ReviewsResponse } from "../../types";
import Error from "./Error";

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
      <div className="flex items-center justify-between border-b mt-8">
        <h2>Customer Reviews</h2>
        {loading && <Skeleton width={200} />}
        {reviewData && (
          <div className="flex items-center">
            <ReviewStars rating={reviewData.average_rating_all_locations} />
            <div className="ml-2">{reviewData.total_reviews_count} Reviews</div>
          </div>
        )}
      </div>
      {loading && (
        <div>
          {[...Array(5)].map((r) => (
            <div className="flex border-b py-2">
              <div className="w-1/3">
                <Skeleton width={100} />
              </div>
              <div className="w-2/3 ml-2">
                <Skeleton width={100} />
                <Skeleton count={3} className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <Error>Error Loading Reviews. Try Refreshing the page</Error>}
      {reviewData && (
        <div>
          <div>
            {reviewData?.reviews.map((r) => (
              <div className="flex sm:flex-row flex-col border-b py-2">
                <div className="sm:w-1/3 mb-1 sm:mb-0">
                  {r.reviewer.displayName}
                </div>
                <div className="sm:w-2/3 sm:ml-2">
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
