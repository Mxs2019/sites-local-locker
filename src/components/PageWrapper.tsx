// import * as Turbo from "@hotwired/turbo";
import React from "react";
import "../styles/index.css";
import Header from "./Header";
type Props = {
  //Insert Props Here
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  // console.log(Turbo ? "TURBO LOADED" : "NO TURBO");
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <div className="w-1 sm:w-4 md:w-8 lg:w-16 min-h-screen bg-ll-red">
          <a href="https://localocker.com/" className="p-2 hidden md:block">
            <img
              className="w-full"
              src="https://booking.localocker.com/static/media/locker-main-logo.9defa528.svg"
              alt="Locker Main Logo"
            />
          </a>
        </div>
        <div className="w-full">
          <Header />
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
