import React from "react";
import sqrBtn from "../assets/check-square-regular.jpg";
import longArrow from "../assets/long-arrow.jpg";

const GetStarted = () => {
  return (
    <div>
      <div className="font-mono text-xs text-[#848181] bg-black">
        <p className="pb-10 pl-60 pt-40">
          That's where we come in - the folks at Oliya, with our
          <br /> Kickstarter campaign goal of $1000 for total books and
          <br />
          one final book time
        </p>
        <div className="flex flex-row pl-60 list-none">
          <li className="flex flex-row">
            <img src={sqrBtn} alt="square-btn" />
            <p className="pb-10">Free Delivery</p>
          </li>
          <li className="flex flex-row">
            <img src={sqrBtn} alt="square-btn" />
            <p>24/7 Support</p>
          </li>
          <li className="flex flex-row">
            <img src={sqrBtn} alt="square-btn" />
            <p>Free Return</p>
          </li>
        </div>
        <div className="flex flex-row pl-60 pt-10">
          <button className="bg-[#72775B] text-[#D9D4D4] py-[21.5px]  w-[223px] h-[64px]">
            Get started{" "}
            <span>
              <img src={longArrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
