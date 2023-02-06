import React from "react";
import room_1 from "../assets/room-1.jpg";
import room_2 from "../assets/room-2.jpg";
import room_3 from "../assets/room-3.jpg";
import room_4 from "../assets/room-4.jpg";
import play from "../assets/play-button.jpg";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center space-x-9 pt-8 bg-black">
        <img src={room_1} alt="room-1" className="w-[281px] h-[394px]" />
        <img src={room_2} alt="room-2" className="w-[281px] h-[394px]" />
        <img src={room_3} alt="room-3" className="w-[281px] h-[394px]" />
        <img src={room_4} alt="room-4" className="w-[281px] h-[394px]" />
      </div>
      <div className="font-display text-7xl font-bold flex flex-col w-full text-gray-400 bg-black pl-64  ">
        <div className="flex flex-row items-center">
          <div>
            <h1>We Bring</h1>
          </div>
          <div className="flex flex-row pl-4 ml-1 w-[562px] h-[88px] items-center bg-[#72775B]">
            <h1 className="py-2">The Good</h1>
            <p className="text-xs font-mono pl-10 ">30S VIDEO</p>
            <img src={play} alt="btn-play" className="pl-11" />
          </div>
        </div>
        <h1 className="leading-normal">Pillows To Life.</h1>
      </div>
    </div>
  );
};

export default HeroSection;
