import React, { useEffect, useState } from "react";
import heroImg from "./../../assets/hero-img.png";
import Categories from "../Categories/Categories";
const Home = () => {
  return (
    <div>
      <div className="bg-[#1e1e1e20]">
        <div className="container mx-auto px-4 mb-4">
          <div className="hero-container  md:max-w-full lg:max-w-screen-xl mx-auto">
            <div className="md:flex justify-center items-center">
              <div className="hero-content  lg:w-6/12">
                <h1 className="text-4xl font-bold">
                  One Step Closer To Your <br />{" "}
                  <span className="title-text">Dream Job</span>
                </h1>
                <p className="py-5">
                  Explore thousands of job opportunities with all the
                  information you need. Its your future. Come find it. Manage
                  all your job application from start to finish.
                </p>
                <button className="btn-primary">Get Started</button>
              </div>
              <div className="hero-img  lg:w-6/12">
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
