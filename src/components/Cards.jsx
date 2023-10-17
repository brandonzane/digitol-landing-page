import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[2rem] px-4 bg-white">
      <h1 className="text-black text-2xl font-bold text-center pb-20">
        Website Pricing
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p- my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Starter</h2>
          <p className="text-center text-4xl font-bold">$500</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Optimised Website</p>
            <p className="py-2 border-b mx-8">
              {" "}
              Custom Analytics & Google Analytics
            </p>
            <p className="py-2 border-b mx-8">Custom Design</p>
            <p className="py-2 border-b mx-8">2 Design Revisions</p>
            <p className="py-2 border-b mx-8">Easy to use CMS</p>
          </div>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() =>
              (window.location.href =
                "https://noteforms.com/forms/website-form-ywokcf")
            }
          >
            Get Started
          </button>
        </div>
        <div className="overflow-hidden w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <div class="relative">
            <div class="absolute top-0 right-0">
              <div class="w-36 h-8 absolute top-2 -right-12">
                <div class="h-full w-full bg-yellow-600 text-white text-sm text-center leading-8 font-semibold transform rotate-45">
                  Most Popular
                </div>
              </div>
            </div>
          </div>
          <img className="w-20 mx-auto bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8 text-slate-900">
            Premium
          </h2>
          <p className="text-center text-4xl font-bold text-slate-900">$1500</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Online Store</p>
            <p className="py-2 border-b mx-8 mt-8">
              Additional Features eg. Bookings & User accounts
            </p>
            <p className="py-2 border-b mx-8">Emails & Support</p>
            <p className="py-2 border-b mx-8">CMS or Custom Code</p>
            <p className="py-2 border-b mx-8">Staff Training</p>
          </div>
          <button
            className="bg-slate-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() =>
              (window.location.href =
                "https://noteforms.com/forms/premium-users-ixibn7")
            }
          >
            Get Started
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-1.3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Enterprise</h2>
          <p className="text-center text-lg font-bold">Contact Us</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Everything in Premium</p>
            <p className="py-2 border-b mx-8">Hourly Backup</p>
            <p className="py-2 border-b mx-8">Security and Monitoring</p>
            <p className="py-2 border-b mx-8">Unlimited Design Revisions</p>
            <p className="py-2 border-b mx-8">Premium Customer Support</p>
            <p className="py-2 border-b mx-8">Premium Customer Support</p>
            <p className="py-2 border-b mx-8">Conversion Tracking</p>
          </div>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() =>
              (window.location.href =
                "https://noteforms.com/forms/website-form-ywokcf")
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
