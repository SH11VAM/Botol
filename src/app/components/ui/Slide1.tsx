"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Slide1 = () => {

  const [value, setValue] = useState(false);

  const path ="M 15 80  L 150 40 Q 160 40, 250 40, L 680 40, Q 680 40, 780 10, L 1000 10";

  useEffect(() => {
    setTimeout(() => {
      setValue(!value);
    } , 2000);


  }, []);
 
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={`lg:max-w-6xl lg:w-[100%] lg:h-[450px] w-[340px] h-[120px] mb-[16rem] mt-8 lg:mt-5  ml-[4rem]  ${ value ?"visible" :"hidden"} `}
        viewBox="0 0 1000 100"
      >
        {/* Main Path */}
        <path d={path} stroke="#fcd0d6" strokeWidth="3" fill="transparent" />

        {/* Dotted Line (Vertical) */}
        <line
          x1="150"
          y1="220"
          x2="150"
          y2="30"
          stroke="#ff6b6b"
          strokeDasharray="5,5"
          strokeWidth="2"
        />

        <line
          x1="780"
          y1="10"
          x2="780"
          y2="-120"
          stroke="#ff6b6b"
          strokeDasharray="5,5"
          strokeWidth="2"
        />

        {/* Text */}
        <text
          x="15"
          y="20"
          fill={value ? "#ff6b6b" : "none"}
          stroke="#ff6b6b"
          fontSize="48"
          fontFamily="Arial"
          fontWeight="bold"
        >
          1
        </text>
        <text
          x="180"
          y="100"
          fill="#ff6b6b"
          fontSize="18"
          fontFamily="Arial"
          fontWeight="bold"
        >
          <tspan x="190" y="100">
            {" "}
            Week 1 - Relief & Clarity
          </tspan>
          <tspan x="190" y="120" fontSize="11" fontWeight="normal">
            Feel the weight to start to lift as your open up,
          </tspan>
          <tspan x="190" y="135" fontSize="11" fontWeight="normal">
            discovering clarity in a safe, non judgmental
          </tspan>
          <tspan x="190" y="150" fontSize="11" fontWeight="normal">
            space
          </tspan>
        </text>
        <text
          x="180"
          y="130"
          fill="#ff6b6b"
          fontSize="13"
          fontFamily="Arial"
          fontWeight="bold"
        ></text>
        <text
          x="670"
          y="-10"
          fill={value ? "#ff6b6b" : "none"}
          stroke="#ff6b6b"
          fontSize="48"
          fontFamily="Arial"
          fontWeight="bold"
        >
          2
        </text>
        <text
          x="790"
          y="-100"
          fill="#ff6b6b"
          fontSize="15"
          fontFamily="Arial"
          fontWeight="bold"
        >
          <tspan x="790" y="-100">
            Week 4 - Increased Resilience
          </tspan>
          <tspan x="790" y="-80" fontSize="11" fontWeight="normal">
            Begin to notice your reactions shift-less
          </tspan>
          <tspan x="790" y="-65" fontSize="11" fontWeight="normal">
            anxiety, more calmness, and tools to manage
          </tspan>
          <tspan x="790" y="-50" fontSize="11" fontWeight="normal">
            stress
          </tspan>
        </text>
        <motion.path
          className={"stroke-current text-[#ff6b6b]"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value ? 1 : 0 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d={path}
        />
        {/* Circles */}
        <circle cx="30" cy="75" r="20" fill="#fcd0d6" />
        <circle cx="30" cy="75" r="8" fill="#f6687a" />
        <circle cx="150" cy="40" r="8" fill="#f6687a" />
        <circle cx="680" cy="40" r="20" fill="#fcd0d6" />
        <circle cx="680" cy="40" r="8" fill="#f6687a" />
        <circle cx="780" cy="12" r="8" fill="#f6687a" />
      </motion.svg>

      
    </>
  );
};

export default Slide1;
