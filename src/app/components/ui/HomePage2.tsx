import Image from "next/image";

const Home2 = ({ isMobile }: any) => {
  return (
    <div className="flex overflow-x-hidden lg:h-[720px] h-[360px] lg:min-w-full justify-center relative -z-10">
      <Image
        src="/bottleHand.jpg"
        alt="bottle"
        width={isMobile ? 250 : 640}
        height={isMobile ? 250 : 640}
        layout="intrinsic"
        objectFit="contain"
      />
      <Image
        src="/option.png"
        alt="bottle"
        width={isMobile ? 250 : 640}
        height={isMobile ? 250 : 640}
        layout="intrinsic"
        objectFit="contain"
      />
    </div>
  );
};

export default Home2;
