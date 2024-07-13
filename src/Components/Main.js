import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import Girl from "../Assets/girl.webp";

const Main = () => {
  return (
    <div className="px-3 md:px-16">
      <div className="flex flex-col justify-between bg-gradient-to-br from-customCol1 via-customCol2 to-customCol3 rounded-3xl px-3 h-[50vh] md:px-16 md:py-8 md:h-[100vh]">
      <div>
          <div className="flex flex-col p-4 pt-5 gap-4 md:p-16 md:pt-12 md:gap-6">
            <div className="flex flex-row items-center text-white gap-2 md:gap-4 md:pl-4">
              <div>
                <HiOutlineCubeTransparent className="text-white bg-blue-500 rounded-full md:p-1 md:scale-[200%]" />
              </div>
              <div>
                <span className="text-xs md:text-xl">
                  Our Clinic's Services + Checkups
                </span>
              </div>
            </div>
            <div className="md:w-[70%]">
              <span className="text-white font-bold text-4xl md:text-8xl">
                Revolutionizing Healthcare Tech
              </span>
            </div>
            <div className="flex flex-row bg-white items-center rounded-full gap-1 p-1 w-32 md:gap-4 md:p-2 md:w-48">
              <span className="text-xs md:font-medium">Start Checkup Now</span>
              <FaArrowRight className="text-xs md:text-base"/>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 pl-4 md:gap-10 md:pl-16">
            <div className="flex flex-col justify-between bg-white rounded-3xl w-[40px] md:w-[200px] md:h-[200px] md:p-5 Background">
              <div className="flex flex-row justify-between items-center md:gap-3">
                <div className="border-2 border-black rounded-3xl">
                  <span className="md:p-2">Quality Of Life</span>
                </div>
                <div>
                  <GrCircleInformation className="md:scale-[140%]"/>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center md:gap-3">
                <div>
                  <span>Emotional Health Service</span>
                </div>
                <div>
                  <MdOutlineArrowCircleRight className="transform -rotate-45 md:scale-[230%]" />
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
