"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Slide4 = () => {
    const [value, setValue] = useState(false);
      useEffect(() => {
        setTimeout(() => {
          setValue(!value);
        }, 4000);
      }, []);
  return (
    <>  
     <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className={`max-w-6xl w-[100%] h-[450px]  mb-[16rem] ml-[4rem] ${value ? "visible" : "hidden"} `}
          viewBox="0 0 1000 100"
        >
          {/* Main Path */}
          <path d="M 15 50  L 100 50 Q 100 50, 180 10, L 680 13"
          stroke="#fcd0d6" 
          strokeWidth="3" 
          fill="transparent" />

          {/* Dotted Line (Vertical) */}
          <line
            x1="180"
            y1="10"
            x2="180"
            y2="-140"
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
            4
          </text>
          <text
           
            fill="#ff6b6b"
            fontSize="18"
            fontFamily="Arial"
            fontWeight="bold"
          >
           
            <tspan x ="200" y="-100"> 3 Months & Beyond - Thriving:</tspan> 
           <tspan x="200" y="-80" fontSize="11" fontWeight="normal">Live with confidence, peace, and joy as you</tspan>
           <tspan x="200" y="-65" fontSize="11" fontWeight="normal">embrace the lasting impact of therapy on</tspan>
           <tspan x="200" y="-50" fontSize="11" fontWeight="normal">every area of your life.</tspan> 
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
            5
          </text>
         
          <motion.path
            className={"stroke-current text-[#ff6b6b]"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
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
           d="M 15 50  L 100 50 Q 100 50, 180 10, L 680 13"
          />
          {/* Circles */}
          <circle cx="100" cy="50" r="20" fill="#fcd0d6" />
          <circle cx="100" cy="50" r="8" fill="#f6687a" />
          <circle cx="180" cy="10" r="8" fill="#f6687a" />
          <circle cx="680" cy="15" r="20" fill="#fcd0d6" />
          <circle cx="680" cy="15" r="8" fill="#f6687a" />
          
        </motion.svg>
    </>
  )
}

export default Slide4