import React from "react";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header() {
  return (
    <header className=" custom-padding bg-primary-1500 flex items-center justify-between py-2">
      <Logo />
      <PageNav />
    </header>
  );
}

export default Header;
