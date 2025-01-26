import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div>
        <Image
        src="/footer.png"
        alt="footer"
        layout="intrisic"
        width={1280}
        height={300}
        objectFit="cover"/>
      </div>
    </footer>
  );
};

export default Footer;
