import { BookMarked, Bot, Building2, Microwave } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-900">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-gray-300 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
            Forge Your Future, One Dream at a Time
          </h2>
          <p className="text-gray-300 mt-6 text-base leading-relaxed">
            Dive into a world where your ideas find the tools and guidance they
            need to thrive. From expert business advice and startup ideas to
            immersive fiction content, cutting-edge 3D print services, and
            intelligent crypto bots, Dream Forge brings your diverse ambitions
            to life. Whatever your passion, we’re here to help you shape it into
            reality.
          </p>
          <button
            type="button"
            className="bg-transparent border-2 border-gray-300 mt-12 transition-all text-gray-300 font-bold text-sm rounded-md px-6 py-2.5">
            Get Started
          </button>
        </div>

        <div className="lg:h-[480px] flex items-center">
          <img
            src="https://ik.imagekit.io/jsw0002/dream-forge_fbpV5tEzB.webp?updatedAt=1731037317874"
            className="w-full h-full object-cover"
            alt="Dream Forge"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
        <div className="bg-gray-300 p-6 rounded-md">
          <Building2 className="w-10 h-10 mb-4 inline-block bg-gray-300 text-primary p-2 rounded-md" />
          <h3 className="text-lg font-bold mb-2 text-gray-800">
            Business Plans
          </h3>
          <p className="text-sm text-gray-600">Ideas to Business Plans</p>
          <a
            href="/business-plan"
            className="text-primary font-bold inline-block text-sm mt-4 hover:underline">
            Learn more
          </a>
        </div>
        <div className="bg-gray-300 p-6 rounded-md">
          <BookMarked className="w-10 h-10 mb-4 inline-block bg-gray-300 text-primary p-2 rounded-md" />
          <h3 className="text-lg font-bold mb-2 text-gray-800">Stories</h3>
          <p className="text-sm text-gray-600">
            Stories to Inspire and Motivate
          </p>
          <a
            href="/blog"
            className="text-primary font-bold inline-block text-sm mt-4 hover:underline">
            Learn more
          </a>
        </div>
        <div className="bg-gray-300 p-6 rounded-md">
          <Microwave className="w-10 h-10 mb-4 inline-block bg-gray-300 text-primary p-2 rounded-md" />
          <h3 className="text-lg font-bold mb-2 text-gray-800">3D Printing</h3>
          <p className="text-sm text-gray-600">Nick Knacks to 3D Prints</p>
          <a
            href="javascript:void(0);"
            className="text-primary font-bold inline-block text-sm mt-4 hover:underline">
            Learn more
          </a>
        </div>
        <div className="bg-gray-300 p-6 rounded-md">
          <Bot className="w-10 h-10 mb-4 inline-block bg-gray-300 text-primary p-2 rounded-md" />
          <h3 className="text-lg font-bold mb-2 text-gray-800">Crypto Bots</h3>
          <p className="text-sm text-gray-600">
            Crypto Bots to Automate Your Trading
          </p>
          <a
            href="javascript:void(0);"
            className="text-primary font-bold inline-block text-sm mt-4 hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
