"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Home2 from "@/app/components/ui/HomePage2";
import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const BottleWithCapAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleToggle();
  }, []);

  const handleToggle = async () => {
    setIsOpen(!isOpen);
   
    setTimeout(() => {
      
      document.getElementById("secoundpage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 5000);
  };

  const bottleVariants = {
    closed: { y: 0 },
    open: {
      y: [0, 100, 100, 710],
      transition: {
        duration: 4.1,
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  const capVariants = {
    closed: { y: -50 },
    open: {
      y: [-80, -300, 660],
      transition: {
        duration: 5,
        times: [0, 0.6, 0.6, 1],
      },
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          className={`absolute  ${
            isOpen ? "top-[340px]" : "top-[380px]"
          } p-1 left-1/2 transform translate-x-[-50%] translate-y-[-50%] ${
            isOpen ? "w-[450px] h-[450px]" : "w-[300px] h-[300px]"
          } transition-all duration-700 ease-in-out rounded-full   border bg-gradient-to-r from-[#4DFBFB] to-[#788EFF]`}
        >
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>

        <div>
          <motion.div
            variants={capVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <div className="absolute top-[300px] left-50 z-50">
              <Image
                src="/bottle_cap.png"
                alt="Bottle Cap"
                width={140}
                height={50}
                layout="intrinsic"
              />
            </div>
          </motion.div>

          {/* Bottle */}

          <motion.div
            variants={bottleVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <div className="relative top-[250px]  ">
              <Image
                src="/bottle_bottom.png"
                alt="Bottle"
                width={140}
                height={100}
                layout="intrinsic"
              />
            </div>
          </motion.div>
        </div>

        {/* Heading */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -420 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1
              className={`font-bold text-[3.5rem] text-[#333] ${familjenGrotesk.className}`}
            >
              The Ultimate Companion
            </h1>
            <h1 className="font-bold text-[3.5rem] text-[#333]">
              {" "}
              for Hydration
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#555" }}>
              We believe in the power of hydration. <br />
              Our mission is simple yet vital.
            </p>
          </motion.div>
        )}
        <div className="flex absolute space-x-[700px] mt-[400px]">
          <Image
            alt="image1"
            width={150}
            height={150}
            src="/HI1.png"
            objectFit="cover"
          />
          <Image
            alt="image1"
            width={150}
            height={150}
            src="/HI2.png"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Homepage2 */}

      <div id="secoundpage">
        <Home2 />
      </div>
    </>
  );
};

export default BottleWithCapAnimation;
