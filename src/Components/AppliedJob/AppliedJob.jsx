import React, { useState } from "react";
import { getLocalStorage } from "../utilities/fakedb";
import ShowAplliedJob from "../ShowAplliedJob/ShowAplliedJob";
import "./AppliedJob.css";
import OthersHeader from "../OthersHeader/OthersHeader";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";

const AppliedJob = () => {
  const savedAppliedJobs = useLoaderData();
  const [jobs, setJobs] = useState(savedAppliedJobs);

  console.log(jobs);

  const handleFillter = (e) => {
    const filerValue = e.target.value;
    if (filerValue) {
      const filterData = savedAppliedJobs.filter(
        (singleData) => singleData.Job_location === filerValue
      );
      setJobs(filterData);
    }
  };

  return (
    <div>
      <OthersHeader>Applied Jobs</OthersHeader>
      <div className="sm:max-w-xl md:max-w-full my-5 lg:max-w-screen-xl mx-auto lg:my-20 md:my-10">
        <div className="text-end">
          <select
            onChange={handleFillter}
            className="p-2 bg-[#F4F4F4] border rounded-lg shadow-sm outline-none focus:border-black"
          >
            <option value="">Filter By</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        {jobs?.map((data) => (
          <ShowAplliedJob data={data} key={data.id}></ShowAplliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
