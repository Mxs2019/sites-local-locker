import { provideCore, VerticalSearchResponse } from "@yext/answers-core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhone, FaSearch } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import {
  QueryParamProvider,
  StringParam,
  useQueryParam,
} from "use-query-params";
import PageWrapper from "./components/PageWrapper";

const core = provideCore({
  apiKey: "77315e980f56dcdde6b93f11479b1bbf",
  experienceKey: "answers-real-estate",
  locale: "en",
  experienceVersion: "PRODUCTION",
});

export type Locker = {
  id: string;
  name: string;
  geomodifier: string;
  address: {
    line1: string;
    city: string;
    region: string;
    postalCode: string;
  };
};

const LocationCard = ({ locker }: { locker: Locker }) => {
  const { id, address, geomodifier, name } = locker;
  return (
    <a
      className="border p-4 mb-2 bg-white rounded hover:bg-gray-50 cursor-pointer hover:border-ll-red block"
      href={`/${id}`}
    >
      <div className="font-medium">
        {name} {geomodifier}
      </div>
      <div className="mt-3 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-ll-blue opacity-50" />{" "}
        {address.line1}, {address.city}, {address.region} {address.postalCode}
      </div>
      <div className="flex items-center mt-1">
        <FaPhone className="mr-2 text-ll-blue opacity-50" />
        (203)273-8840
      </div>
    </a>
  );
};

const LocationSkeleton = () => {
  return (
    <div className="border p-4 mb-2 bg-white rounded hover:bg-gray-50 cursor-pointer hover:border-ll-red block">
      <div className="font-medium">
        <Skeleton width={250} />
      </div>
      <div className="mt-3 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-ll-blue opacity-50" />{" "}
        <Skeleton width={150} />
      </div>
      <div className="flex items-center mt-1">
        <FaPhone className="mr-2 text-ll-blue opacity-50" />
        <Skeleton width={100} />
      </div>
    </div>
  );
};

const IndexPage = () => {
  const [
    verticalResponse,
    setVerticalResponse,
  ] = useState<VerticalSearchResponse>();
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useQueryParam("query", StringParam);
  const [loading, setLoading] = useState(false);

  const runSearch = (query: string) => {
    setLoading(true);
    core
      .verticalSearch({
        verticalKey: "offices",
        query,
      })
      .then((res) => {
        setSearchedQuery(query);
        setVerticalResponse(res);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setQuery(searchedQuery);
    runSearch(searchedQuery);
  }, []);

  return (
    <div className="bg-gray-50">
      <PageWrapper>
        <Helmet>
          <title>Welcome to Local Locker</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div>
          <div className="flex min-h-full">
            <div className="w-full max-w-md p-4">
              <div>
                <form
                  className="flex border focus-within:ring-2 focus-within:ring-ll-blue bg-white px-4 py-2 rounded items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    runSearch(query);
                  }}
                >
                  <FaSearch className="text-gray-400 mr-2" />
                  <input
                    placeholder="Enter zip"
                    className="w-full focus:outline-none"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                </form>
              </div>
              <div className="mt-2">
                {loading &&
                  [...Array(10)].map((_, i) => <LocationSkeleton key={i} />)}
                {!loading && verticalResponse && (
                  <div>
                    {verticalResponse.verticalResults.resultsCount > 0 && (
                      <div>
                        <div className="text-gray-600 mb-1">
                          Showing{" "}
                          {verticalResponse.verticalResults.results.length} of{" "}
                          {verticalResponse.verticalResults.resultsCount}{" "}
                          locations
                        </div>
                        {verticalResponse?.verticalResults.results.map((r) => (
                          <LocationCard
                            key={r.id}
                            locker={r.rawData as Locker}
                          />
                        ))}
                      </div>
                    )}
                    {verticalResponse.verticalResults.resultsCount === 0 && (
                      <div>
                        <div className="text-gray-600 mb-2 border p-4 rounded">
                          No results found for query{" "}
                          <span className="font-medium text-ll-blue">
                            "{searchedQuery}"
                          </span>
                          . Showing all results below
                        </div>
                        {verticalResponse?.allResultsForVertical.verticalResults.results.map(
                          (r) => (
                            <LocationCard
                              key={r.id}
                              locker={r.rawData as Locker}
                            />
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="v-full bg-gray-900 sticky top-0 text-white w-full">
              {/* <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{
                  key: "AIzaSyB5D45ghF1YMfqTLSzWubmlCN1euBVPhFw",
                }}
                defaultCenter={{
                  lat: 59.95,
                  lng: 30.33,
                }}
                defaultZoom={11}
              >
                <div lat={59.955413} lng={30.337844} text="My Marker" />
              </GoogleMapReact> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

//@ts-ignore
ReactDOM.render(
  <QueryParamProvider>
    <IndexPage />
  </QueryParamProvider>,
  document.getElementById("app")
);
