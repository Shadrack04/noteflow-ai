import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

function PageNav() {
  return (
    <nav className="hidden flex-2 md:flex items-center justify-between">
      <ul className=" flex items-center gap-6 text-gray-400 ">
        <li className=" hover:text-primary-50 hover:font-medium transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <li className=" hover:text-primary-50 hover:font-medium transition-colors duration-300 cursor-pointer">
          Pricing
        </li>
        <li className=" hover:text-primary-50 hover:font-medium transition-colors duration-300 cursor-pointer">
          About
        </li>
        <li className=" hover:text-primary-50 hover:font-medium transition-colors duration-300 cursor-pointer">
          Community
        </li>
      </ul>
      <div className=" flex items-center justify-center gap-4">
        <Button type="secondary-btn">Login</Button>
        <Button type="primary-btn">Get Start</Button>
      </div>
    </nav>
  );
}

export default PageNav;
