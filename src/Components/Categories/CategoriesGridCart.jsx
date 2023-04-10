import React from "react";
import Featured from "../Featured/Featured";

const CategoriesGridCart = ({ singleData }) => {
  const { id, Jobs, Logo, Name } = singleData;
  return (
    <div>
      <div className="bg-[#586ced34] p-5 lg:mb-20 md:mb-10 rounded-lg">
        <div className="">
          <img className="bg-[#7e8ffe77] p-2 rounded" src={Logo} alt="" />
        </div>
        <h3 className="text-xl font-semibold">{Name}</h3>
        <p className="text-[#505050]">{Jobs}</p>
      </div>
    </div>
  );
};

export default CategoriesGridCart;
