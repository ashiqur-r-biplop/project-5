import React from "react";
import { getLocalStorage } from "../utilities/fakedb";
import ShowAplliedJob from "../ShowAplliedJob/ShowAplliedJob";
import "./AppliedJob.css";

const AppliedJob = () => {
  const getData = getLocalStorage();

  return (
    <div className="sm:max-w-xl md:max-w-full my-5 lg:max-w-screen-xl mx-auto lg:my-20 md:my-10">
      <div className="">
        <div className="custom-menu">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option className="">Filter By</option>
            <option>Onsite</option>
            <option>Remote</option>
          </select>
        </div>
      </div>
      {getData.map((data) => (
        <ShowAplliedJob data={data} key={data.id}></ShowAplliedJob>
      ))}
    </div>
  );
};

export default AppliedJob;
