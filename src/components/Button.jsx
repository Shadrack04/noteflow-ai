import React from "react";

function Button({ children, type }) {
  return (
    <button
      className={`${type} flex items-center justify-center gap-4 text-md py-2 px-4 rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;
