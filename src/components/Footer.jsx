import React from "react";
import Logo from "./Logo";
import Visa from "../assets/svg/visa";

function Footer() {
  return (
    <footer className=" custom-padding flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between bg-linear-to-b from-primary-1500 to-primary-1300 md:pt-18 pb-26">
      <Logo />
      <div className=" flex flex-wrap md:wrap-normal items-center md:justify-center gap-20 text-primary-text">
        <div className="-text flex flex-col gap-4">
          <p className=" text-primary-text text-xl mb-4">Home</p>
          <ul className=" flex flex-col gap-4">
            <li className=" font-light">Faq</li>
            <li className=" font-light">Features</li>
            <li className=" font-light">Companies</li>
            <li className=" font-light">Testimonial</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className=" text-primary-text text-xl mb-4">Pricing</p>
          <ul className=" flex flex-col gap-4">
            <li className=" font-light">Plans</li>
            <li className=" font-light">billing</li>
            <li className=" font-light">Free trials</li>
            <li className=" font-light">Refunds</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-4">
          <p className=" text-primary-text text-xl mb-4">About</p>
          <ul className=" flex flex-col gap-4">
            <li className=" font-light">Career</li>
            <li className=" font-light">Our story</li>
            <li className=" font-light">Contact</li>
            <li className=" font-light">Policy</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-4">
          <p className=" text-primary-text text-xl mb-4">Community</p>
          <ul className=" flex flex-col gap-4">
            <li className=" font-light">Forum</li>
            <li className=" font-light">Stories</li>
            <li className=" font-light">Blog</li>
            <li className=" font-light">Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
