import React from "react";
import instagram from "./../../assets/insta.png";
import fb from "./../../assets/fb.png";
import twitter from "./../../assets/twiter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black py-16 footer">
      <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 pb-5 lg:max-w-screen-xl text-white container mx-auto">
        <div>
          <h3 className="font-semibold pb-3">The Dream Jobs</h3>
          <p className="pb-3">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex justify-start items-center pb-3">
            <div className="ms-2 footer-icons">
              <img src={instagram} alt="" />
            </div>
            <div className="ms-2 footer-icons">
              <img src={fb} alt="" />
            </div>
            <div className="ms-2 footer-icons">
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold pb-3">Company</h3>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div>
          <h3 className="font-semibold pb-3">Product</h3>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div>
          <h3 className="font-semibold pb-3">Support</h3>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div>
          <h3 className="font-semibold pb-3">Contact</h3>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr className="container lg:max-w-screen-xl mx-auto" />
      <div className="container lg:max-w-screen-xl mx-auto md:flex justify-between py-5 items-center">

        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by The Dream Jobs</p>
      </div>
    </div>
  );
};

export default Footer;
