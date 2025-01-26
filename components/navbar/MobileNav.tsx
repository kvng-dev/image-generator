import { Navlinks } from "@/constant/constant";
import { XIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[200%]";
  return (
    <div>
      <div
        className={`text-white fixed justify-center flex flex-col h-screen transform transition-all duration-500 w-full bg-gray-950 space-y-8 z-[1050] top-0 ${navOpen} opacity-90`}
      >
        {Navlinks.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="text-white w-fit text-xl ml-12 hover:border-b-[1.5px] pb-1 hover:border-white sm:text-[30px]"
          >
            {link.label}
          </Link>
        ))}

        <XIcon
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default MobileNav;
