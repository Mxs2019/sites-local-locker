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

export type UnitCategory = {
  id: number;
  units: {
    id: number;
    status: "booked" | "available";
    is_hidden: boolean;
    offline_flag: boolean;
    notes: "";
    notes_last_update: null;
    created: string;
    updated: string;
    price: string;
    unit_number: number;
    locked_by: null;
    date_locked: null;
    unit_category: number;
    notes_author: null;
  }[];
  size: string;
  details: string;
  price: string;
  status: "booked" | "available";
  category?: string;
  is_hidden: false;
  offline_flag: boolean;
  join_waitlist: boolean;
  created: string;
  updated: string;
  location: number;
};

export type AdminResponseFormat = {
  unit_categories: UnitCategory[];
  all_location_reviews_and_rating: ReviewsResponse;
};
