import React from "react";

function Button({ children, type, glow }) {
  return (
    <button
      className={`${type} ${glow} flex items-center justify-center gap-2 text-md py-4 px-6 rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;
