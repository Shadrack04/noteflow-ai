import React from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Features from "./Features";
import Faq from "./faq/Faq";
import Testimonials from "./testimonial/Testimonials";

function Main({ setOpenModal }) {
  return (
    <main>
      <MdOutlineLightMode className=" fixed bottom-6 right-6 md:right-10 lg:right-10 xl:right-22 medium-laptop:right-[8rem] 2xl:right-[42rem] size-10 text-white" />
      <Hero setOpenModal={setOpenModal} />
      <Sponsors />
      <Features />
      <Faq />
      <Testimonials />
    </main>
  );
}

export default Main;
