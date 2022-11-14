import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center pb-5 ">
        <div className="flex flex-col">
          <p className="text-gray-600">
            all right reserved for{" "}
            <Link to="#" className="text-black">
              {" "}
              main.sazzad@gmail.com
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <BsFacebook className="text-blue-700 cursor-pointer h-6 w-6" />
          <BsGithub className="text-black-700 cursor-pointer h-6 w-6" />
        </div>
      </div>
      <div className="flex justify-center items-center text-gray-500 font-normal mb-2">
        <p>Thanks for visiting our website 💝</p>
      </div>
    </footer>
  );
};

export default Footer;
