import Image from "next/image";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
          <Image src="/images/faq.png" alt="faq" width={500} height={500} />
        </div>

        <div>
          <FaqCard />
        </div>
      </div>
    </div>
  );
};
export default Faq;
