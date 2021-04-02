import React from "react";
import ReactDOM from "react-dom";
import BackChevron from "./components/BackChevron";
import Hours from "./components/Hours";
import PageWrapper from "./components/PageWrapper";
import {Helmet} from "react-helmet";

const LocationPage = ({ name, address, geomodifier, description, hours }) => {
  const geomodifierMerged = geomodifier ? geomodifier : address.city;

  return (
    <PageWrapper>
      <Helmet>
        <title>Hello {name} {geomodifierMerged}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="border-b pb-2 mb-6 bg-orange-700">
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

//@ts-ignore
ReactDOM.render(<LocationPage {...pageData} />, document.getElementById("app"));
