import React from "react";
import "./ShowAppliedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ShowAplliedJob = ({ data }) => {
  const {
    id,
    Company_Logo,
    Company_Name,
    Job_location,
    Job_title,
    Job_type,
    Location,
    Salary,
  } = data;
  const navigate = useNavigate()
  return (
    <div className="border p-3 mx-5 my-4">
      <div className="lg:flex justify-between items-center">
        <div className="lg:flex justify-start lg:w-10/12">
          <div className="bg-[#1e1e1e48] lg:w-2/12 img-box p-5 rounded">
            <img className="w-screen" src={Company_Logo} alt="" />
          </div>
          <div className="applied-content ms-3">
            <h3 className="text-xl font-semibold">{Job_title}</h3>
            <p className="text-[#1e1e1e8b]">{Company_Name}</p>
            <div className="flex items-center cart-btn">
              <button className="title-text">{Job_location}</button>
              <button className="title-text">{Job_type}</button>
            </div>
            <div className="location-Grp md:flex items-center  my-5">
              <div className="flex items-center justify-start location mt-3">
                <FontAwesomeIcon className=" icons" icon={faLocationDot} />
                <p className="ms-2">{Location}</p>
              </div>
              <div className="flex items-center justify-start Salary mt-3">
                <FontAwesomeIcon
                  className=" icons"
                  icon={faCircleDollarToSlot}
                />
                <p className="ms-2">{Salary}</p>
              </div>
            </div>
          </div>
        </div>
        {/* btn */}
          <button onClick={() => navigate(`/Details/${id}`)} className="btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default ShowAplliedJob;
