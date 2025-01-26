import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Slide2 = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValue(!value);
    }, 2000);
  }, []);

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={`max-w-6xl w-[100%] h-[450px]  mb-[16rem] ml-[4rem] ${value ? "visible" : "hidden"} `}
        viewBox="0 0 1000 100"
      >
        {/* Main Path */}
        <path
          d="M 15 50  L 100 50 Q 100 50, 180 10, L 680 13, Q 680 13, 780 -15, L 1000 -15"
          stroke="#fcd0d6"
          strokeWidth="3"
          fill="transparent"
        />

        {/* Dotted Line (Vertical) */}
        <line
          x1="180"
          y1="10"
          x2="180"
          y2="-120"
          stroke="#ff6b6b"
          strokeDasharray="5,5"
          strokeWidth="2"
        />

        <line
          x1="780"
          y1="-15"
          x2="780"
          y2="120"
          stroke="#ff6b6b"
          strokeDasharray="5,5"
          strokeWidth="2"
        />

        {/* Text */}
        <text
          x="90"
          y="0"
          fill={value ? "#ff6b6b" : "none"}
          stroke="#ff6b6b"
          fontSize="48"
          fontFamily="Arial"
          fontWeight="bold"
        >
          2
        </text>
        <text fill="#ff6b6b" fontSize="18" fontFamily="Arial" fontWeight="bold">
          <tspan x="200" y="-80">
            {" "}
            Week 4 - Increased Resilience
          </tspan>
          <tspan x="200" y="-60" fontSize="11" fontWeight="normal">
            Begin to notice your reactions shift-less
          </tspan>
          <tspan x="200" y="-45" fontSize="11" fontWeight="normal">
            anxiety, more calmness, and tools to manage
          </tspan>
          <tspan x="200" y="-30" fontSize="11" fontWeight="normal">
            stress
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
          y="-30"
          fill={value ? "#ff6b6b" : "none"}
          stroke="#ff6b6b"
          fontSize="48"
          fontFamily="Arial"
          fontWeight="bold"
        >
          3
        </text>
        <text fill="#ff6b6b" fontSize="15" fontFamily="Arial" fontWeight="bold">
          <tspan x="790" y="50">
            Week - 8 Lasting Positivity
          </tspan>
          <tspan x="790" y="70" fontSize="11" fontWeight="normal">
            Wake up with a renewed sense of well-being.
          </tspan>
          <tspan x="790" y="85" fontSize="11" fontWeight="normal">
            as you start to take control of your mental and
          </tspan>
          <tspan x="790" y="100" fontSize="11" fontWeight="normal">
            {" "}
            emotional health.
          </tspan>
        </text>
        <motion.path
          className={"stroke-current text-[#ff6b6b]"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value ? [0, 0.18, 0.18, 0.68, 0.68, 1] : 0 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            // repeat: Infinity,
            // repeatType: "loop",
            // repeatDelay: 1,
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 15 50  L 100 50 Q 100 50, 180 10, L 680 13, Q 680 13, 780 -15, L 1000 -15"
        />
        {/* Circles */}
        <circle cx="100" cy="50" r="20" fill="#fcd0d6" />
        <circle cx="100" cy="50" r="8" fill="#f6687a" />
        <circle cx="180" cy="10" r="8" fill="#f6687a" />
        <circle cx="680" cy="15" r="20" fill="#fcd0d6" />
        <circle cx="680" cy="15" r="8" fill="#f6687a" />
        <circle cx="780" cy="-15" r="8" fill="#f6687a" />
      </motion.svg>
    </>
  );
};

export default Slide2;
