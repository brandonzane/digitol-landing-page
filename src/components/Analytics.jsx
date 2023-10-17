import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA AND DESIGN</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            All your decision making data in one place
          </h1>
          <p>
            {/* Strategic Decision Making */}
            <strong>Strategic Decision Making:</strong> In today's fast-paced
            business environment, making informed decisions is crucial. Our
            software solutions and websites are built with data analytics at
            their core, providing you with the insights you need to make
            strategic, data-backed decisions. Say goodbye to guesswork and hello
            to data-driven precision. <br />
            <br />
            {/* Personalization */}
            <strong>Personalization:</strong> We understand that every business
            is unique. With data-driven software and websites, we can tailor the
            user experience to match your target audience's preferences. Whether
            you're a B2C e-commerce store or a B2B service provider, we ensure
            that your digital presence aligns with your audience's behavior.
            <br />
            <br />
            {/* Improved Efficiency */}
            <strong>Improved Efficiency:</strong> Data-driven solutions help
            streamline your business processes. Whether it's inventory
            management, customer relationship management, or supply chain
            optimization, our software empowers you to enhance operational
            efficiency and reduce costs.
          </p>
          <button
            className="bg-slate-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={() =>
              (window.location.href =
                "https://noteforms.com/forms/website-form-ywokcf")
            }
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
