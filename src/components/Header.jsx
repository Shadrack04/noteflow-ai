import React from "react";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header() {
  return (
    <header className=" bg-primary-1300 flex items-center justify-between md:px-18">
      <Logo />
      <PageNav />
    </header>
  );
}

export default Header;
