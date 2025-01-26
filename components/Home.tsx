"use client";

import { useEffect } from "react";
import About from "./About";
import Faq from "./Faq";
import Hero from "./Hero";
import Pricing from "./Pricing";
import RecentImage from "./RecentImage";
import Review from "./Review";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Pricing />
      <Review />
      <Faq />
    </div>
  );
};
export default Home;
