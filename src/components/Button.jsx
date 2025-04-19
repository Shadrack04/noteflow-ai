import React from "react";

function Button({ children, type, glow, handleClick, width }) {
  return (
    <button
      onClick={handleClick}
      className={`${type} ${glow} ${width} flex items-center justify-center gap-2 text-md py-4 px-8 rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;
