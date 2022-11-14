import React from "react";
import banner from "../assets/banner.png";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="px-5">
      <div className="flex items-center flex-col md:flex-row hero-section-light dark:hero-section-dark lg:min-h-[65vh] my-10 lg:mt-0">
        <div className="flex-1 flex flex-col justify-start items-start mb-10 md:mb-0">
          <div>
            <p className="inline-flex bg-gradient-to-r from-[#DAF2F2] via-slate-50/60 to-[#DAF2F2] px-2 py-1 rounded-[5px]">
              Extra{" "}
              <span className="px-1 font-semibold small-ad hero-text-gradient">
                {" "}
                20%{" "}
              </span>{" "}
              on your first order 🎁
            </p>
          </div>
          <div>
            <img src={banner} alt="banner" className="object-contain" />
          </div>
          <div className="input-box relative">
            <input type="email" />
            <span>Enter your email</span>
            <button>send</button>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="">
            <p className="text-sm mb-2 text-slate-800 inline-flex bg-gradient-to-r from-[#DAF2F2] via-slate-50/60 to-[#DAF2F2] px-2 py-1 rounded-[5px]">
              welcome from our Website ❤️
            </p>
          </div>
          <div className="mt-5 md:mt-0 text-[40px] leading-[55px] md:text-[50px] md:leading-[65px] font-semibold mb-5">
            Customize Your <span className="hero-text-gradient">Tools</span>{" "}
            <br className="hidden md:block" /> With Extra Offer
          </div>
          <div>
            <p className="inline-flex bg-gradient-to-r from-[#DAF2F2] via-slate-50/60 to-[#DAF2F2] px-2 py-1 rounded-[5px]">
              Stay home stay safe and order using our website 🥰
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
