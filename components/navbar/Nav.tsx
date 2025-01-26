"use client";

import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import { Menu, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`flex items-center justify-between h-[12vh] w-full fixed z-[100] mx-auto transition-all duration-200 ${
        navBg ? "bg-gray-900 shadow-md" : ""
      }`}
    >
      <h1 className="text-3xl italic text-white font-bold ml-8 md:ml-16">
        AI-GEN
      </h1>
      <div className="md:flex items-center space-x-10 hidden">
        {/* Navigation links */}
        {Navlinks.map((navLink) => (
          <Link
            href={navLink.url}
            key={navLink.id}
            className="text-white relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
          >
            {navLink.label}
          </Link>
        ))}
      </div>
      {/* Button & icons */}
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <MenuIcon
          onClick={openNav}
          className="cursor-pointer w-6 h-6 md:hidden"
        />
      </div>
    </div>
  );
};
export default Nav;
