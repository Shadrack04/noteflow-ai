import { FaArrowRight } from "react-icons/fa";
import noteSummarizer from "/images/note-summarizer.png";
import headshots from "/images/headshots.png";
import Button from "./Button";

function Hero({ setOpenModal }) {
  return (
    <section className=" custom-padding dark:bg-linear-to-b from-primary-1500 to-primary-1300 md:pt-12 lg:pt-24 lg:pb-10">
      <div className=" flex flex-col lg:flex-row py-14 md:py-0 items-start lg:items-center justify-between">
        <div className="">
          <h1 className=" text-primary-text-light dark:text-primary-text header-text font-bold">
            AI-Powered Notes.
            <br /> Organize and <br /> Summarize in Seconds
          </h1>
          <p className=" text-secondary-text-light dark:text-secondary-text my-6 text-[0.9rem] md:text-[1rem] leading-8 ">
            Let AI organize & summarize your notes, <br />
            saving you time and boosting productivity
          </p>
          <div className=" my-12">
            <Button
              handleClick={() => setOpenModal((open) => !open)}
              type="primary"
              glow="glow"
            >
              Get Started <FaArrowRight className="hidden md:flex w-2" />
            </Button>
          </div>
        </div>

        <div className=" flex justify-center w-full lg:w-auto">
          <img
            src={noteSummarizer}
            alt="An image of a summarized note."
            className=" md:max-w-[30rem] shadow-2xl dark:bg-transparent rounded-2xl"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-start md:items-center gap-4 mt-18">
        <img src={headshots} alt="" className=" h-10" />
        <p className=" text-secondary-text-light dark:text-secondary-text ">
          Trusted by
          <span className=" text-special-text-light dark:text-special-text font-extrabold">
            {" "}
            12,653+{" "}
          </span>
          productivity junkies
        </p>
      </div>
    </section>
  );
}

export default Hero;
