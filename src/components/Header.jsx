import React from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header({ setOpenModal }) {
  return (
    <header className=" custom-padding bg-primary-1500 flex items-center justify-between py-2">
      <Logo />
      <PageNav setOpenModal={setOpenModal} />
      <PiSquaresFourBold className=" md:hidden text-secondary-text size-10 cursor-pointer" />
    </header>
  );
}

export default Header;
