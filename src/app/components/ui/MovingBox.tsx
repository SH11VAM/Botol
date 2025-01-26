"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

const slides = [
  { id: 1, components: <Slide1 /> },
  { id: 2, components: <Slide2 /> },
  { id: 3, components: <Slide3 /> },
  { id: 4, components: <Slide4 /> },
];

interface MovingBoxProps {
  blur: boolean;
}

const MovingBox = ({ blur }: MovingBoxProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length; // Make slides.length constant

 useEffect(() => {

  if(!blur) return ;
    // Stop the interval if it's the last slide
    if (currentSlide === totalSlides - 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1); // Move to the next slide
    }, 7000); // 7 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [blur,currentSlide, totalSlides]); 

  return (
    <>
      <div  className="absolute w-full h-full justify-center items-center">
      <AnimatePresence mode="wait">
        {
          blur && <motion.div
           key={slides[currentSlide].id} // Key ensures proper animation
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -100 }}
           transition={{ duration: 1.5 }} // Adjust transition duration
         >
           {slides[currentSlide].components}
         </motion.div>
        }
       
      </AnimatePresence>
      </div>
    </>
  );
};

export default MovingBox;
