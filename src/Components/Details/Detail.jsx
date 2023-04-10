import React from "react";
import { useLoaderData } from "react-router-dom";
import OthersHeader from "../OthersHeader/OthersHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.css";
import {
  faCalendar,
  faCircleDollarToSlot,
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../utilities/fakedb";

const Detail = () => {
  const DetailsCart = useLoaderData();
  console.log(DetailsCart);
  const {
    id,
    Company_Logo,
    Company_Name,
    Educational_Requirements,
    Experiences,
    Job_Description,
    Job_Responsibility,
    Job_location,
    Job_title,
    Job_type,
    Location,
    Salary,
    email,
    phone,
    address,
  } = DetailsCart;
const handleLocalStorage =(id) =>{
    addToDb(id)
}
  return (
    <div className="">
      <OthersHeader>Job Details</OthersHeader>
      <div className="lg:flex justify-center items-center sm:max-w-xl md:max-w-full my-5 lg:max-w-screen-xl mx-auto lg:my-20 md:my-10">
        <div className="detail-info lg:w-8/12 mx-4">
          <p>
            <span className="text-lg font-semibold">Job Description: </span>
            {Job_Description}
          </p>
          <p>
            <span className="text-lg font-semibold">Job Responsibility: </span>
            {Job_Responsibility}
          </p>
          <p>
            <span className="text-lg font-semibold">
              Educational Requirements:{" "}
            </span>
            {Educational_Requirements}
          </p>
          <p>
            <span className="text-lg font-semibold">Experiences: </span>
            {Experiences}
          </p>
        </div>
        <div className="lg:w-4/12 flex flex-col  mx-4">
          <div className="detail-contact">
            <div className="detail-cart">
              <div>
                <h2 className="text-lg font-semibold">Job Details</h2>
                <hr />
                <div className="flex justify-start items-center items">
                  <FontAwesomeIcon
                    className="Detail-icons"
                    icon={faCircleDollarToSlot}
                  />
                  <p>
                    <span className="text-lg font-semibold">Salary : </span>
                    {Salary}
                  </p>
                </div>
                <div className="flex justify-start items-center items">
                  <FontAwesomeIcon className="Detail-icons" icon={faCalendar} />
                  <p>
                    <span className="text-lg font-semibold">Job Title : </span>
                    {Job_title}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Contact Information</h2>
                <hr />
                <div className="flex justify-start items-center items">
                  <FontAwesomeIcon className="Detail-icons" icon={faPhone} />
                  <p>
                    <span className="text-lg font-semibold">Phone : </span>
                    {phone}
                  </p>
                </div>
                <div className="flex justify-start items-center items">
                  <FontAwesomeIcon className="Detail-icons" icon={faMailBulk} />
                  <p>
                    <span className="text-lg font-semibold">Email : </span>
                    {email}
                  </p>
                </div>
                <div className="flex justify-start items-center items">
                  <FontAwesomeIcon
                    className="Detail-icons"
                    icon={faLocationDot}
                  />
                  <p>
                    <span className="text-lg font-semibold">Address : </span>
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => handleLocalStorage(id)} className="btn-primary">Apply bow</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
