import React, { useEffect, useState } from "react";
import SingleFeatured from "../SingleFeatured/SingleFeatured";
import Detail from "../Details/Detail";

const Featured = () => {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 4))
        setFullData(data)
      });
  }, []);
//   console.log(data);
  const handleSeeAll =() =>{
    setData(fullData)
}
  return (
    <div className="lg:mt-20 mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 grid-cols=1">
          {data?.map((singleData) => (
            <SingleFeatured
              singleData={singleData}
              key={singleData.id}
            ></SingleFeatured>
          ))}
        </div>
        <div className={`text-center my-5 ${data.length > 4 ? 'hidden' : 'block'}`} id="seeAll">
        <button onClick={handleSeeAll} className="btn-primary ">See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
