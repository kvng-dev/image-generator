import { Check } from "lucide-react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="uppercase text-white font-bold mb-6">
            flexible & affordable
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            Our Pricing Plans
          </h1>

          <p className="text-white font-medium text-opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur soluta ea quas deserunt hic non magni vero ad
            consequatur pariatur quo, ex aut blanditiis ratione illo voluptatem
            quod atque maxime!
          </p>

          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-55">
                High quality Services
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-55">
                24/7 Customer Support
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-55">
                Affordable Rates
              </p>
            </div>
          </div>
        </div>
        {/* price card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-right">
            <PriceCard price="4" user="1" type="Silver Pack" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <PriceCard price="8" user="3" type="Golden Pack" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
