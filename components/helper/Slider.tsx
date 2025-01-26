"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../ReviewCard";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      {" "}
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        arrows={true}
      >
        <div>
          <ReviewCard image="/images/u1.jpg" name="John Doe" role="Developer" />
        </div>
        <div>
          <ReviewCard image="/images/u2.jpg" name="Jane Doe" role="Designer" />
        </div>
        <div>
          <ReviewCard
            image="/images/u3.jpg"
            name="John Doe"
            role="Web Developer"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
