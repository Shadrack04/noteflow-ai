import React from "react";

function Input({ placeholder, id, label }) {
  return (
    <label
      htmlFor={id}
      className=" w-full text-primary-text flex flex-col gap-2"
    >
      {label}
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className=" bg-primary-75 w-[100%] px-6 py-4 mx-auto rounded-full placeholder:text-primary-350"
      />
    </label>
  );
}

export default Input;
