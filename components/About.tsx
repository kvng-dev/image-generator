import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        <div className="order-2 h-[600px] xl:order-1">
          <Image
            src="/images/about.jpg"
            alt="abt"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        <div className="order-1 xl:order-2">
          <h2 className="text-gray-200 mb-4 font-semibold text-lg capitalize">
            What we do
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            Create your own AI Business easily.
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            animi modi quo, vitae, facere totam officia illo ex placeat tenetur
            perferendis incidunt necessitatibus! Laboriosam possimus asperiores
            temporibus cumque ipsa deserunt tempora tenetur accusantium,
            repellat enim quia dolorum modi, hic nemo.
          </p>

          <Button
            className="bg-rose-500 w-36 h-12 text-base uppercase"
            size={"lg"}
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};
export default About;
