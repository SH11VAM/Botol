import Image from "next/image";

const HydrationEssentials = () => {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Hydration Essentials</h1>
          <p className="text-gray-400">
            Discover Our Range of Premium Water Bottles
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle1.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle2.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle3.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle1.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle2.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/Bottle3.png"
              alt="Bottle"
              width={300}
              height={400}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-600 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HydrationEssentials;
