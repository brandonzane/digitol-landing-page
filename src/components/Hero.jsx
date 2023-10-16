import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[url('/src/white-texture.jpg')] w-full bg-cover bg-center">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#2a7960] font-light p-2 text-xl">
          Software & Websites for Small to Enterprise Businesses
        </p>
        <h1 className="text-[#2f8a67] md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-[#1d5744] md:text-5xl sm:text-4xl text-md font-light py-4">
            Websites and Software for
          </p>
          <Typed
            className="text-[#153f32] md:text-5xl sm:text-4xl text-xl font-regular md:pl-4 pl-2"
            strings={["B2B", "B2C", "SaaS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-[#31b188] w-[200px] rounded-md font-light my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
