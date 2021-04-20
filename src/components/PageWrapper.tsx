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
        <div className="w-12 min-h-screen bg-ll-red"></div>
        <div className="w-full">
          <Header />
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
