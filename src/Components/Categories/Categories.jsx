import React, { useEffect, useState } from "react";
import CategoriesGridCart from "./CategoriesGridCart";
import Featured from "../Featured/Featured";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data));
  }, []);
  return (
    <div className="lg:mt-20 mt-10 md:max-w-full lg:max-w-screen-xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-5 px-4 md:grid-cols-2 lg:grid-cols-4 ">
        {
            categoriesData?.map(singleData => <CategoriesGridCart singleData={singleData} key={singleData?.id}></CategoriesGridCart>)
        }
      </div>
      
      <Featured></Featured>
    </div>
  );
};

export default Categories;
