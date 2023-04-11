import React from "react";
import './OthersHeader.css'


const OthersHeader = ({children}) => {
    // console.log(children)
  return (
    <div className="text-center  mb-10 ">
      <div className="other-hero-section">
        <h1 className="text-3xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default OthersHeader; //bg-[#1e1e1e20]
