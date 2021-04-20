import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useFetch } from "use-http";
import { AdminResponseFormat } from "../types";
import BackChevron from "./components/BackChevron";
import Hours from "./components/Hours";
import PageWrapper from "./components/PageWrapper";
import ReviewsWidget from "./components/ReviewsWidget";
import Units from "./components/Units";

const LocationPage = ({ name, address, geomodifier, description, hours }) => {
  const geomodifierMerged = geomodifier ? geomodifier : address.city;
  const { loading, error, data } = useFetch<AdminResponseFormat>(
    `https://admin.localocker.com/location/${49}/`,
    {},
    []
  );

  const unitsRef = useRef(null);

  return (
    <PageWrapper>
      <Helmet>
        <title>
          {name} {geomodifierMerged}
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="bg-gray-50">
        <div className="container py-4">
          <div className="border-b pb-2 mb-6 bg-orange-700">
            <a href="/" className="flex items-center">
              <BackChevron />
              <div className="">&nbsp;Back</div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <h1>
                {name} {geomodifierMerged}
              </h1>
              <div className="mb-4">
                <h3>Address:</h3>
                <p>
                  {address.line1}, {address.city}, {address.region}{" "}
                  {address.postalCode}
                </p>
              </div>
              {description && (
                <div className="mb-4">
                  <h3>Details:</h3>
                  <p>{description}</p>
                </div>
              )}
              <div className="flex sm:flex-row sm:flex-wrap flex-col gap-2 mb-4">
                <button
                  className="btn btn-primary"
                  onClick={() => unitsRef.current.scrollIntoView()}
                >
                  See Prices
                </button>
                <div className="btn btn-secondary flex items-center justify-center">
                  <FaPhone className="mr-2" /> (203) 273-8840
                </div>
                <div className="btn btn-secondary">Book a Tour</div>
                <div className="btn btn-secondary flex items-center justify-center">
                  <FaMapMarkerAlt className="mr-2" /> Directions
                </div>
              </div>
              <div className="mb-4">
                <h3>Hours:</h3>
                <Hours hours={hours} />
              </div>
            </div>
            <div className="md:w-1/3">Photos</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div ref={unitsRef}>
          <Units
            unitCategories={data?.unit_categories}
            loading={loading}
            error={error}
          />
        </div>
        <ReviewsWidget
          reviewData={data?.all_location_reviews_and_rating}
          loading={loading}
          error={error}
        />
      </div>
    </PageWrapper>
  );
};

//@ts-ignore
ReactDOM.render(<LocationPage {...pageData} />, document.getElementById("app"));
