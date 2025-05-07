import React, { useState } from "react";
import Button from "../Button";
import Question from "./Question";
import { questionsData } from "./questionsData";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  function handleClick(index) {
    setOpenQuestion((prev) => (prev === index ? null : index));
  }

  return (
    <section className=" custom-padding dark:bg-linear-to-b from-primary-1500 to-primary-1300 md:py-20">
      <div>
        <h2 className=" text-primary-text-light dark:text-primary-text text-[1.8rem] font-bold md:text-5xl md:text-center md:py-8">
          Frequently Asked Questions
        </h2>
        <p className=" hidden md:block text-secondary-text-light dark:text-secondary-text text-center my-2">
          The most commonly asked questions about NoteFlow.
        </p>
        <p className="hidden md:block text-secondary-text-light dark:text-secondary-text text-center my-2 cursor-pointer">
          Have any other questions?{" "}
          <a className=" underline text-blue-500 dark:text-inherit">
            Chat with our expert tech team
          </a>
        </p>
        <div className=" flex flex-wrap items-center md:justify-center gap-x-2 gap-y-4 md:gap-4 py-8">
          <Button type="primary" glow="glow">
            General
          </Button>
          <Button type="secondary">Pricing</Button>
          <Button type="secondary">Features</Button>
          <Button type="secondary">Integrations</Button>
        </div>
      </div>
      {questionsData.map((data, index) => (
        <Question
          key={index}
          data={data}
          index={index}
          openQuestion={openQuestion}
          handleClick={handleClick}
        />
      ))}
    </section>
  );
}

export default Faq;
