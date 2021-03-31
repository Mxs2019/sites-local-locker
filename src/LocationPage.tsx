import React from "react";
import ReactDOM from "react-dom";
import BackChevron from "./BackChevron";
import Hours from "./Hours";
import PageWrapper from "./PageWrapper";

const LocationPage = ({ name, address, geomodifier, description, hours }) => {
  const geomodifierMerged = geomodifier ? geomodifier : address.city;

  return (
    <PageWrapper>
      <div className="border-b pb-2 mb-6">
        <a href="/" className="flex items-center">
          <BackChevron />
          <div className="">&nbsp;Back</div>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
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
          <div className="mb-4">
            <h3>Hours:</h3>
            <Hours hours={hours} />
          </div>
        </div>
        <div>Photos</div>
      </div>
    </PageWrapper>
  );
};

export default LocationPage;
