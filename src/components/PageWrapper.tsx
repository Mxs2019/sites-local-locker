import React from "react";
import Header from "./Header";
import '../styles/index.css';
import * as Turbo from "@hotwired/turbo"

type Props = {
  //Insert Props Here
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <div className="w-12 min-h-screen bg-ll-red"></div>
        <div className="w-full">
          <Header />
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
