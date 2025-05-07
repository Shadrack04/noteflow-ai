import React from "react";

// .secondary-btn {
//   border: 2px solid var(--color-primary-text);
//   color: var(--color-primary-text);
//   transition: all 300ms ease-in-out;
//   cursor: pointer;
// }
// .secondary-btn:hover {
//   background-color: var(--color-primary-500);
//   color: var(--color-primary-1400);
// }

function Button({ children, type, glow, handleClick, width }) {
  const base =
    "flex items-center justify-center gap-2 text-md py-4 px-8 rounded-full";
  const style = {
    primary:
      base +
      " bg-primary-500 text-primary-1400 duration-300ms cursor-pointer hover:bg-transparent hover:border-2 border-primary-text dark:hover:text-primary-text",

    secondary:
      base +
      " border-2 border-2 border-primary-1400 hover:border-none dark:border-primary-text dark:text-primary-text duration-300ms cursor-pointer hover:bg-primary-500 hover:text-primary-1400 ",
  };
  return (
    <button
      onClick={handleClick}
      className={`${style[type]} ${glow} ${width} flex items-center justify-center gap-2 text-md py-4 px-8 rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;
