import { IoClose } from "react-icons/io5";
import Button from "./Button";

function PageNav({ setOpenModal, openNav, setOpenNav }) {
  return (
    <nav
      className={`${
        !openNav && "translate-x-[100%]"
      } fixed lg:static inset-0 bg-black/50 lg:translate-0 lg:bg-transparent  backdrop-blur-sm transition-transform duration-300 flex-2 md:flex items-center justify-between`}
    >
      <div className=" absolute lg:static right-4 top-4 bottom-4 flex flex-col lg:flex-row lg:items-center justify-between w-[70%] md:w-[50%] lg:w-full bg-primary-1300 lg:bg-transparent px-8 lg:px-0 py-8 lg:py-0 rounded-2xl overflow-auto">
        <IoClose
          className="lg:hidden absolute top-[2rem] left-[2rem] border-2 size-10 p-1 rounded-lg text-white cursor-pointer"
          onClick={() => setOpenNav(false)}
        />
        <ul className=" flex flex-col lg:flex-row lg:items-center gap-6 text-secondary-text pt-24 lg:p-0">
          <li className=" hover:text-primary-text text-[1.5rem] md:text-[1rem] hover:font-medium transition-colors duration-300 cursor-pointer">
            Home
          </li>
          <li className=" hover:text-primary-text text-[1.5rem] md:text-[1rem] hover:font-medium transition-colors duration-300 cursor-pointer">
            Pricing
          </li>
          <li className=" hover:text-primary-text text-[1.5rem] md:text-[1rem] hover:font-medium transition-colors duration-300 cursor-pointer">
            About
          </li>
          <li className=" hover:text-primary-text text-[1.5rem] md:text-[1rem] hover:font-medium transition-colors duration-300 cursor-pointer">
            Community
          </li>
        </ul>
        <div className=" flex flex-col lg:flex-row items-center justify-center gap-4">
          <Button
            handleClick={() => setOpenModal((open) => !open)}
            type="secondary-btn"
            width="w-[100%] lg:w-auto"
          >
            Login
          </Button>
          <Button type="primary-btn" width="w-[100%] lg:w-auto">
            Get Start
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
