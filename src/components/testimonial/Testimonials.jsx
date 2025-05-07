import React, { useState } from "react";
import Masonry from "react-masonry-css";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../Button";
import TestimonialItem from "./TestimonialItem";

import { testimonialData } from "./testimonialData";

// function Testimonials() {
//   const [showLess, setShowLess] = useState(true);

//   const handleClick = () => {
//     setShowLess(!showLess);
//   };
//   return (
//     <section className=" custom-padding dark:bg-linear-to-b from-primary-1300 to-primary-1500 py-18">
//       <div className=" flex flex-col items-center justify-center text-center gap-8 py-8">
//         <Button type="primary-btn" glow="glow">
//           Testimonials
//         </Button>
//         <h2 className=" text-primary-text-light dark:text-primary-text text-[1.6rem] md:text-5xl leading-10 md:leading-14 font-bold">
//           What our AI-powered <br /> notetakers have to say
//         </h2>
//         <p className=" text-secondary-text-light dark:text-secondary-text max-w-[30rem] leading-8">
//           NoteFlow has helped 1000’s supercharge their productivity with cutting
//           edge AI note taking tools
//         </p>
//       </div>
//       <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-6">
//         {testimonialData.map((testimonial, index) => (
//           <TestimonialItem
//             key={index}
//             testimonial={testimonial}
//             index={index}
//             showLess={showLess}
//           />
//         ))}
//       </div>
//       <div className=" flex items-center justify-center py-16">
//         <Button handleClick={handleClick} type="secondary-btn">
//           {showLess ? (
//             <>
//               Show More <IoIosArrowDown />
//             </>
//           ) : (
//             <>
//               Show Less <IoIosArrowUp />
//             </>
//           )}
//         </Button>
//       </div>
//     </section>
//   );
// }

function Testimonials() {
  const [showLess, setShowLess] = useState(true);

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  const handleClick = () => {
    setShowLess(!showLess);
  };
  return (
    <section className=" custom-padding dark:bg-linear-to-b from-primary-1300 to-primary-1500 py-18">
      <div className=" flex flex-col items-center justify-center text-center gap-8 py-8">
        <Button type="primary" glow="glow">
          Testimonials
        </Button>
        <h2 className=" text-primary-text-light dark:text-primary-text text-[1.6rem] md:text-5xl leading-10 md:leading-14 font-bold">
          What our AI-powered <br /> notetakers have to say
        </h2>
        <p className=" text-secondary-text-light dark:text-secondary-text max-w-[30rem] leading-8">
          NoteFlow has helped 1000’s supercharge their productivity with cutting
          edge AI note taking tools
        </p>
      </div>
      {/* <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-6"> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-2 md:gap-4"
        columnClassName="space-y-2 md:space-y-4"
      >
        {testimonialData.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            testimonial={testimonial}
            index={index}
            showLess={showLess}
          />
        ))}
      </Masonry>

      {/* </div> */}
      <div className=" flex items-center justify-center py-16">
        <Button handleClick={handleClick} type="secondary">
          {showLess ? (
            <>
              Show More <IoIosArrowDown />
            </>
          ) : (
            <>
              Show Less <IoIosArrowUp />
            </>
          )}
        </Button>
      </div>
    </section>
  );
}

export default Testimonials;
