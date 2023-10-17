import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-20 text-white px-4 bg-slate-900">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Ready to create your dream website?
          </h1>
          <p>Click the "Get Started" button to fill in the form.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <button
              className="bg-[#00df9a] text-white text-lg rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              onClick={() =>
                (window.location.href =
                  "https://noteforms.com/forms/website-form-ywokcf")
              }
            >
              Get Started
            </button>
          </div>
          <p>
            We care bout the protection of your data.
            {/* <span className="text-[#00df9a]">Privacy Policy.</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
