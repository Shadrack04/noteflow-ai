import React from "react";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header({ setOpenModal }) {
  return (
    <header className=" custom-padding bg-primary-1500 flex items-center justify-between py-2">
      <Logo />
      <PageNav setOpenModal={setOpenModal} />
    </header>
  );
}

export default Header;
