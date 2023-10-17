import React from "react";
import {
  // FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  // FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">digitol.</h1>
        <p className="py-4">
          Empowering Your Digital Journey with Data-Driven Excellence. Elevate
          Your Business Today with Digitol - Where Innovation Meets Insight.
        </p>
        <div className="flex justify-evenly md:w-[75%] my-6">
          <a href="https://www.facebook.com/profile.php?id=100083528558486">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/digitol_marketing/">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/Digitol-Digital-Marketing">
            <FaGithubSquare size={30} />
          </a>
          {/* <a href="https://www.twitter.com">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://www.dribbble.com">
            <FaDribbbleSquare size={30} />
          </a> */}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-evenly mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Digital Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
