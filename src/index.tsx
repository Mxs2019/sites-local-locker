import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import PageWrapper from "./components/PageWrapper";

const IndexPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Welcome to Local Locker</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div>
        <div className="max-w-screen-md mx-auto text-ll-blue">
          <div className="text-3xl font-bold mb-4 mt-4">
            Welcome to Local Locker
          </div>
          <p className="mb-4">
            Click on a link to a view a location page below. This site uses
            turbo links so as you navigate around it doesn't do a full page
            refresh!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {Array.from(Array(20).keys()).map((i) => (
              <a
                key={i}
                href={`/${i + 1}`}
                className="border p-3 hover:shadow-md rounded-sm hover:bg-gray-100 cursor-pointer block bg-gray-50"
              >
                Location {i + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

//@ts-ignore
ReactDOM.render(<IndexPage />, document.getElementById("app"));
