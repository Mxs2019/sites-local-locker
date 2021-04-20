import React from "react";
import Skeleton from "react-loading-skeleton";
import { UnitCategory } from "../../types";
import Error from "./Error";

type Props = {
  //Insert Props Here
  className?: string;
  unitCategories?: UnitCategory[];
  loading: boolean;
  error: Error;
};

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
  // More people...
];

const Units = ({ className, unitCategories, error, loading }: Props) => {
  const classHeader =
    "px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
  return (
    <div className="mt-4">
      <div className="">
        <h2>Available Units</h2>
      </div>
      {error && <Error>Error Loading Units. Try Refreshing the page</Error>}
      {!error && (
        <>
          <div className="md:hidden">
            {loading &&
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-50 p-3 border rounded mb-4">
                  <div className="text-2xl text-ll-blue mb-2">
                    <Skeleton width={120} />
                  </div>
                  <div>
                    <Skeleton width={100} />
                  </div>

                  <div className=" text-sm text-ll-blue mt-4">
                    <Skeleton />
                  </div>
                </div>
              ))}
            {unitCategories &&
              unitCategories
                .sort((a, b) => {
                  return a.status === "booked" ? 1 : -1;
                })
                .map((uc, i) => (
                  <div
                    key={uc.id}
                    className="bg-gray-50 p-3 border rounded mb-4"
                  >
                    <div className="text-2xl text-ll-blue mb-2">{uc.size}</div>
                    <div className="flex">
                      <div className="text-ll-blue">
                        ${parseFloat(uc.price).toFixed(0)}
                      </div>
                      <div className="text-xs font-medium tracking-wider ml-2">
                        {uc.status === "available" && (
                          <div className="px-2 py-1 rounded-md border  border-green-300 bg-green-50 text-green-900 inline-block">
                            Available
                          </div>
                        )}
                        {uc.status === "booked" && (
                          <div className="px-2 py-1 rounded-md border border-gray-300 bg-gray-50 text-gray-400  inline-block">
                            Booked
                          </div>
                        )}
                      </div>
                    </div>

                    <div className=" text-sm text-ll-blue mt-4">
                      {uc.status === "available" && (
                        <a href="#" className="btn btn-secondary">
                          Book Now
                        </a>
                      )}
                      {uc.status === "booked" && (
                        <a href="#" className="btn btn-link">
                          Join Waitlist
                        </a>
                      )}
                    </div>
                  </div>
                ))}
          </div>
          <div className="hidden md:flex md:flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 border-t">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className={classHeader}>
                          Size
                        </th>
                        <th scope="col" className={classHeader}>
                          Status
                        </th>
                        <th scope="col" className={classHeader}>
                          Price
                        </th>
                        <th scope="col" className={classHeader}>
                          Deals
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {loading &&
                        [...Array(3)].map((uc, i) => (
                          <tr key={i}>
                            <td className="px-6 py-6 whitespace-nowrap text-xl font-medium text-gray-900">
                              <Skeleton />
                            </td>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                              <Skeleton />
                            </td>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                              <Skeleton />
                            </td>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                              <Skeleton />
                            </td>
                          </tr>
                        ))}
                      {unitCategories &&
                        unitCategories
                          .sort((a, b) => {
                            return a.status === "booked" ? 1 : -1;
                          })
                          .map((uc, i) => (
                            <tr key={uc.id} className="hover:bg-gray-100">
                              <td className="px-6 py-6 whitespace-nowrap text-2xl text-ll-blue">
                                {uc.size}
                              </td>
                              <td className="px-6 py-6 whitespace-nowrap  text-ll-blue uppercase">
                                <div className="text-xs font-medium tracking-wider">
                                  {uc.status === "available" && (
                                    <div className="px-2 py-1 rounded-md border  border-green-300 bg-green-50 text-green-900 inline-block">
                                      Available
                                    </div>
                                  )}
                                  {uc.status === "booked" && (
                                    <div className="px-2 py-1 rounded-md border border-gray-300 bg-gray-50 text-gray-400  inline-block">
                                      Booked
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="px-6 py-6 whitespace-nowrap text-sm text-ll-blue">
                                ${parseFloat(uc.price).toFixed(0)}
                              </td>
                              <td className="px-6 py-6 whitespace-nowrap text-sm text-ll-blue">
                                {uc.status === "available" && (
                                  <a href="#" className="btn btn-secondary">
                                    Book Now
                                  </a>
                                )}
                                {uc.status === "booked" && (
                                  <a href="#" className="btn btn-link">
                                    Join Waitlist
                                  </a>
                                )}
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Units;
