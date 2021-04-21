import classnames from "classnames";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
};

const Error = ({ className, children }: Props) => {
  return (
    <div className={classnames(className)}>
      <div className="p-8 border rounded border-red-300 bg-red-100 text-red-800 text-center flex flex-col items-center">
        <FaExclamationTriangle className="text-3xl" />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Error;
