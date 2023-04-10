import React from "react";

const OthersHeader = ({children}) => {
    // console.log(children)
  return (
    <div className="text-center h-72 flex justify-center items-center mb-10 bg-[#1e1e1e20]">
      <div className="">
        <h1 className="text-3xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default OthersHeader;
