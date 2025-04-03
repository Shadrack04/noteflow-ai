import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import cloud from "/images/cloud.svg";

function Question({ data, index, openQuestion, handleClick }) {
  const { question, answer, icon } = data;
  const hideAnswer = index !== openQuestion ? "hidden" : "";
  return (
    <div
      onClick={() => handleClick(index)}
      className=" flex gap-6 max-w-[70%] mx-auto my-8 cursor-pointer"
    >
      <img
        src={icon}
        alt=" "
        className=" size-12 border-2 border-primary-text p-2 rounded-xl"
      />
      <div className=" mt-3 w-full">
        <div className=" flex items-center justify-between w-full">
          <p className=" text-primary-text text-xl mb-6">{question}</p>
          {!hideAnswer ? (
            <IoIosArrowUp className=" text-primary-text size-8 mb-6" />
          ) : (
            <IoIosArrowDown className=" text-primary-text size-8 mb-6" />
          )}
        </div>
        <p className={`${hideAnswer} text-secondary-text leading-8 w-[90%]`}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default Question;
