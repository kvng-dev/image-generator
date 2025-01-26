"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated_image.jpg";
    link.click();
  };

  const handleGenerateImage = async () => {
    setIsLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "3e97809c16msh9f7d056f945c486p130b1ejsn3d561298c94e",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
    };

    try {
      const response = await axios.request(options);
      setImage(response.data.url);
      toast("Image generated successfully");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while generating the image");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      {/* content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent py-2"
        >
          Create Beautiful Image with <br /> Artificial Intelligence
        </h1>
        <p
          data-aos="fade-up"
          delay-aos-delay="200"
          className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300"
        >
          Get started with our AI-powered image generator tools
        </p>

        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Generate your Dream Image"
            className="w-full rounded-lg outline-none h-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
          />
          <Button onClick={handleGenerateImage} variant={"default"} size={"lg"}>
            Generate
          </Button>
        </div>

        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p>Popular Tag: </p>
          <Button variant={"secondary"}>Creative</Button>
          <Button variant={"secondary"}>Hyperreality</Button>
          <Button variant={"secondary"}>Steampunk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Business</Button>
        </div>

        {/* show loading and image */}
        {isLoading && (
          <div>
            <Loader className="animate-spin mt-6" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <Image
              src={image}
              alt="ai-image"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />

            <Button
              onClick={handleDownloadImage}
              className="my-4 bg-orange-500 hover:bg-orange-800"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Hero;
