import React, { useState } from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header({ setOpenModal }) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className=" custom-padding bg-primary-1500 flex items-center justify-between py-4">
      <Logo />
      <PageNav
        setOpenModal={setOpenModal}
        openNav={openNav}
        setOpenNav={setOpenNav}
      />
      <PiSquaresFourBold
        className=" md:hidden text-secondary-text size-10 cursor-pointer"
        onClick={() => setOpenNav(true)}
      />
    </header>
  );
}

export default Header;
