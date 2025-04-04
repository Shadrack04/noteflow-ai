import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className=" custom-padding flex justify-between bg-linear-to-b from-primary-1500 to-primary-1300 py-16">
      <Logo />
      <div className=" flex items-center justify-center gap-20 text-primary-text">
        <div className="-text flex flex-col gap-4">
          <p className=" text-primary-text text-xl">Home</p>
          <ul className=" flex flex-col gap-2">
            <li>Faq</li>
            <li>Features</li>
            <li>Companies</li>
            <li>Testimonial</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className=" text-primary-text text-xl">Pricing</p>
          <ul className=" flex flex-col gap-2">
            <li>Plans</li>
            <li>billing</li>
            <li>Free trials</li>
            <li>Refunds</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-4">
          <p className=" text-primary-text text-xl">About</p>
          <ul>
            <li>Career</li>
            <li>Our story</li>
            <li>Contact</li>
            <li>Policy</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-4">
          <p className=" text-primary-text text-xl">Community</p>
          <ul>
            <li>Forum</li>
            <li>Stories</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
