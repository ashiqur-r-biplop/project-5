import React, { createContext } from "react";
import "./SingleFeatured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleFeatured = ({ singleData }) => {
  const {
    id,
    Company_Logo,
    Company_Name,
    Job_location,
    Job_title,
    Job_type,
    Location,
    Salary,
  } = singleData;
  return (
    <div>
      <div className="card border rounded-lg p-5">
        <div className="card-img">
          <img className="w-full" src={Company_Logo} />
        </div>
        <h3 className="text-xl font-bold">{Job_title}</h3>
        <p>{Company_Name}</p>
        <div className="flex items-center cart-btn">
          <button className="title-text">{Job_location}</button>
          <button className="title-text">{Job_type}</button>
        </div>
        <div className="location-Grp flex items-center  my-5">
          <div className="flex items-center justify-start location">
            <FontAwesomeIcon className=" icons" icon={faLocationDot} />
            <p className="ms-2">{Location}</p>
          </div>
          <div className="flex items-center justify-start Salary">
            <FontAwesomeIcon className=" icons" icon={faCircleDollarToSlot} />
            <p className="ms-2">{Salary}</p>
          </div>
        </div>
        <Link to={`Details/${id}`}>
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFeatured;
