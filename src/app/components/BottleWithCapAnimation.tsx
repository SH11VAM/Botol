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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    setTimeout(() => {
      handleToggle();
    }, 3000);

    return () => window.removeEventListener("resize", updateScreenSize);
  },[]);


  const handleToggle = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      document.getElementById("secoundpage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 4200);
  };

  const bottleVariants = {
    closed: { y: isMobile ? -150 : 0 },
    open: isMobile
      ? {
          y: [-150, -100, -100, 220], // Mobile-specific animation
          transition: {
            duration: 4.1,
            times: [0, 0.5, 0.5, 1],
          },
        }
      : {
          y: [0, 100, 100, 710], // Desktop-specific animation
          transition: {
            duration: 4.1,
            times: [0, 0.5, 0.5, 1],
          },
        },
  };

  const capVariants = {
    closed: { y: isMobile ? -200 : -50 },
    open: isMobile
      ? {
          y: [-200, -300, 170],   // Mobile-specific animation
          transition: {
            duration: 5,
            times: [0, 0.6, 0.6, 1],
          },
        }
      : {
          y: [-80, -300, 660],    // Desktop-specific animation
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
          minHeight: isMobile ? "100vw" : " 100vh",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          className={`absolute  
            ${
              isOpen
                ? "lg:top-[340px] top-[200px]"
                : "lg:top-[300px] top-[160px]"
            }
             p-1 left-1/2 transform translate-x-[-50%] translate-y-[-50%] 
             ${
               isOpen
                 ? "lg:w-[450px] lg:h-[450px] w-[350px] h-[350px]"
                 : "lg:w-[300px] lg:h-[300px] w-[180px] h-[180px]"
             }
            transition-all duration-700 ease-in-out rounded-full   border bg-gradient-to-r from-[#4DFBFB] to-[#788EFF]`}
        >
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>

        <div>

          {/* Bottle Cap */}


          <motion.div
            variants={capVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <div className="absolute top-[300px] left-50 z-50">
              <Image
                src="/bottle_cap.png" // Replace with the correct path to the bottle cap image
                alt="Bottle Cap"
                width={isMobile ? 80 : 140}
                height={isMobile ? 80 : 140}
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
                src="/bottle_bottom.png" // Replace with the correct path to the bottle image
                alt="Bottle"
                width={isMobile ? 80 : 140}
                height={isMobile ? 80 : 140}
                layout="intrinsic"
              />
            </div>
          </motion.div>
        </div>


        {/* Heading */}

        

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: isMobile ? -200 : -420 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1
              className={`font-bold lg:text-[3.5rem] text-[1.5rem] text-[#333] ${familjenGrotesk.className}`}
            >
              The Ultimate Companion
            </h1>
            <h1
              className={`font-bold lg:text-[3.5rem] text-[1.5rem] text-[#333] ${familjenGrotesk.className}`}
            >
              {" "}
              for Hydration
            </h1>
            <p
              className={`lg:text-[1.2rem] text-[0.6rem] text-[#555] ${familjenGrotesk.className}`}
            >
              We believe in the power of hydration. <br />
              Our mission is simple yet vital.
            </p>
          </motion.div>
        )}


        <div className="flex absolute lg:space-x-[700px] space-x-56 lg:mt-[400px] mt-[290px]">
          <Image
            alt="image1"
            width={isMobile ? 80 : 150}
            height={isMobile ? 80 : 150}
            src="/HI1.png"
            objectFit="contain"
          />
          <Image
            alt="image1"
            width={isMobile ? 80 : 150}
            height={isMobile ? 80 : 150}
            src="/HI2.png"
            objectFit="contain"
          />
        </div>
      </div>



      {/* Homepage2 */}



      <div id="secoundpage">
        <Home2 isMobile={isMobile} />
      </div>
    </>
  );
};

export default BottleWithCapAnimation;
