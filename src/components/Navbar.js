import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around items-center py-8 text-white bg-black">
      <div className="ml-20">
        <h1 className="font-display font-bold text-3xl">Pilled.</h1>
      </div>
      <div className="list-none flex flex-row ml-7 font-mono content-center text-gray-400 ">
        <li className="ml-20">Home</li>
        <li className="ml-10">About Us</li>
        <li className="ml-10">About Us</li>
        <li className="ml-10">Services</li>
        <li className="ml-10">Contact Us</li>
      </div>
      <button type="button" className="ml-24 font-mono px-8 py-3 bg-[#72775B]">
        Free quote
      </button>
    </div>
  );
};

export default Navbar;
