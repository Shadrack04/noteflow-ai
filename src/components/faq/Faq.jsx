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
    <section className=" custom-padding bg-linear-to-b from-primary-1500 to-primary-1300 py-20">
      <div>
        <h2 className=" text-primary-text text-5xl text-center py-8">
          Frequently Asked Questions
        </h2>
        <p className=" text-primary-text text-center my-2">
          The most commonly asked questions about NoteFlow.
        </p>
        <p className=" text-primary-text text-center my-2">
          Have any other questions? Chat with our expert tech team
        </p>
        <div className=" flex items-center justify-center gap-4 py-8">
          <Button type="primary-btn" glow="glow">
            General
          </Button>
          <Button type="secondary-btn">Pricing</Button>
          <Button type="secondary-btn">Features</Button>
          <Button type="secondary-btn">Integrations</Button>
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
