import React from "react";

type Props = {
  //Insert Props Here
};

const Header = ({}: Props) => {
  const links = [
    ["Home", "https://github.com/lymarrie"],
    ["About", "https://github.com/lymarrie"],
    ["Investor Relations", "https://github.com/lymarrie"],
    ["Executive Team", "https://github.com/lymarrie"],
  ];
  return (
    <div className="bg-ll-blue">
      <div className="uppercase flex flex-col md:flex-row gap-4 text-sm tracking-wider text-white  max-w-screen-md mx-auto">
        {links.map((l) => (
          <a
            href="/"
            className="px-4 py-3 hover:bg-blue-800 cursor-pointer"
            key={l[0]}
          >
            {l[0]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
