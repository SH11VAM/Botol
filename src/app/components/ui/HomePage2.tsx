import Image from "next/image";

const Home2 = () => {
  return (
    <div className="flex sm:min-w-full overflow-x-hidden md:min-w-full lg:min-w-full xl:min-w-full justify-center relative -z-10">
      <Image
        src="/bottleHand.jpg"
        alt="bottle"
        width={635}
        height={100}
        layout="intrinsic"
      />
      <Image
        src="/option.png"
        alt="bottle"
        width={635}
        height={100}
        layout="intrinsic"
      />
    </div>
  );
};

export default Home2;
