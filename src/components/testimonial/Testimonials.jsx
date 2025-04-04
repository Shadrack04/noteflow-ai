import React from "react";
import Button from "../Button";
import TestimonialItem from "./TestimonialItem";

import { testimonialData } from "./testimonialData";

function Testimonials() {
  return (
    <section className=" custom-padding bg-linear-to-b from-primary-1300 to-primary-1500 py-18">
      <div className=" flex flex-col items-center justify-center text-center gap-8 py-8">
        <Button type="primary-btn" glow="glow">
          Testimonials
        </Button>
        <h2 className=" text-primary-text text-5xl leading-14 font-bold">
          What our AI-powered <br /> notetakers have to say
        </h2>
        <p className=" text-secondary-text max-w-[30rem] leading-8">
          NoteFlow has helped 1000’s supercharge their productivity with cutting
          edge AI note taking tools
        </p>
      </div>
      <div className=" grid grid-cols-3 grid-flow-dense auto-rows-auto gap-y-8">
        {testimonialData.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
