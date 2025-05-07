import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function SetDarkMode({ darkMode, setDarkMode }) {
  return (
    <div
      onClick={() => setDarkMode((dark) => !dark)}
      className=" cursor-pointer"
    >
      {darkMode ? (
        <MdOutlineLightMode className=" fixed bottom-6 right-6 md:right-10 lg:right-10 xl:right-22 medium-laptop:right-[8rem] 2xl:right-[42rem] size-10 text-white" />
      ) : (
        <MdDarkMode className=" fixed bottom-6 right-6 md:right-10 lg:right-10 xl:right-22 medium-laptop:right-[8rem] 2xl:right-[42rem] size-10 text-primary-1500" />
      )}
    </div>
  );
}

export default SetDarkMode;
