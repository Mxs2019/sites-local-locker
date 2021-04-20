export type ReviewsResponse = {
  reviews: {
    name: string;
    comment: string;
    reviewId: string;
    reviewer: {
      displayName: string;
      profilePhotoUrl: string;
    };
    createTime: string;
    starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
    updateTime: string;
    reviewReply: {
      comment: string;
      updateTime: string;
    };
  }[];
  average_rating_all_locations: number;
  total_reviews_count: number;
};

export type AdminResponseFormat = {
  all_location_reviews_and_rating: ReviewsResponse;
};
