// import { provideCore } from "@yext/answers-core";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaPhone, FaSearch } from "react-icons/fa";
import PageWrapper from "./components/PageWrapper";

// const core = provideCore({
//   apiKey: "77315e980f56dcdde6b93f11479b1bbf",
//   experienceKey: "answers-real-estate",
//   locale: "en",
//   experienceVersion: "PRODUCTION",
// });

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
      className="border p-4 mb-2 bg-white rounded hover:bg-gray-50 cursor-pointer hover:border-ll-red"
      href={`/${id}`}
    >
      <div className="font-medium">
        {name} {geomodifier}
      </div>
      <div>
        {address.line1}, {address.city}, {address.region} {address.postalCode}
      </div>
      <div className=" mt-3 flex items-center">
        <FaPhone className="mr-2 text-ll-blue opacity-50" />
        (203)273-8840
      </div>
    </a>
  );
};

const IndexPage = () => {
  const [verticalResponse, setVerticalResponse] = useState<any>();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const runSearch = (query: string) => {
    // core
    //   .verticalSearch({
    //     verticalKey: "offices",
    //     query,
    //   })
    //   .then((res) => setVerticalResponse(res))
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    runSearch("");
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
                {verticalResponse?.verticalResults.results.map((r) => (
                  <LocationCard key={r.id} locker={r.rawData as Locker} />
                ))}
              </div>
            </div>
            <div className="v-full bg-gray-900 sticky top-0 text-white w-full">
              MAP GOES HERE
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

//@ts-ignore
ReactDOM.render(<IndexPage />, document.getElementById("app"));
