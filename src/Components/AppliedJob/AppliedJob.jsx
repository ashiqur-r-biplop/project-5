import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utilities/fakedb";
import ShowAplliedJob from "../ShowAplliedJob/ShowAplliedJob";
import "./AppliedJob.css";
import OthersHeader from "../OthersHeader/OthersHeader";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";

const AppliedJob = () => {
  const [applied, setApplied] = useState([]);
  useEffect(() => {
    const getData = getLocalStorage();
    setApplied(getData);
  }, []);
  const handleOnsite = (data) => {
    const getData = getLocalStorage();
    const sortData = getData?.filter((a) => a.Job_location === data);
    setApplied(sortData);
  };
  const handleAllData = () => {
    const getData = getLocalStorage();
    setApplied(getData);
  };
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <OthersHeader>Applied Jobs</OthersHeader>
      <div className="sm:max-w-xl md:max-w-full my-5 lg:max-w-screen-xl mx-auto lg:my-20 md:my-10">
        <div className="text-end flex flex-col md:flex-row ms-auto lg:w-max">
          <button
            className="btn-outlined"
            onClick={() => handleOnsite("Onsite")}
          >
            Onsite
          </button>
          <button
            className="btn-outlined"
            onClick={() => handleOnsite("Remote")}
          >
            Remote
          </button>
          <button className="btn-outlined" onClick={handleAllData}>
            All Applied Jobs
          </button>
        </div>
        {applied?.map((data) => (
          <ShowAplliedJob data={data} key={data.id}></ShowAplliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
