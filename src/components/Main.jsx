import React from "react";
import { MdLightMode } from "react-icons/md";

import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Features from "./Features";
import Faq from "./faq/Faq";
import Testimonials from "./testimonial/Testimonials";

function Main({ setOpenModal }) {
  return (
    <main>
      <Hero setOpenModal={setOpenModal} />
      <Sponsors />
      <Features />
      <Faq />
      <Testimonials />
    </main>
  );
}

export default Main;
