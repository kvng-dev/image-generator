import { QuoteIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  role: string;
  image: string;
  name: string;
};
const ReviewCard = ({ role, name, image }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <QuoteIcon className="w-10 h-10 mb-4 text-yellow-300" />
      <p className="font-semibold text-center text-base md:text-l lg:text-xl text-opacity-80 font-white text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
        soluta neque corporis, officia enim laboriosam quidem inventore sapiente
        ab facere placeat! Corporis quibusdam doloribus quod ratione laborum
        tempora placeat nostrum dolorem iste accusantium! Obcaecati rem
        quibusdam incidunt dolore natus.
      </p>
      <div className="mt-8">
        <h1 className="text-base text-white md:text-2xl font-bold text-center">
          {name}
        </h1>
        <p className=" text-sm md:text-lg text-center font-bold text-gray-600">
          {role}
        </p>
        <Image
          src={image}
          height={80}
          width={80}
          alt={name}
          className="mt-6 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};
export default ReviewCard;
