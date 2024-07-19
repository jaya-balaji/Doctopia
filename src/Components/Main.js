import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import Girl from "../Assets/girl.webp";
import { useContext } from "react";
import { MyContext } from "./Context";
import { FaArrowLeft } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';

const Main = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div onClick={()=>setValue(false)} className="px-3 shadow-2xl rounded-3xl md:shadow-none md:rounded-none md:px-16 pb-3 md:pb-5">
      <div  id="home" className="flex flex-col justify-between bg-gradient-to-br from-customCol1 via-customCol2 to-customCol3 rounded-3xl px-3 h-[50vh] md:px-16 md:py-8 md:h-[100vh]">
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
            <div className="flex flex-row bg-white items-center rounded-full gap-1 p-1 w-32 hover:shadow-2xl hover:scale-[105%] transition-transform duration-1500 md:gap-4 md:p-2 md:w-48">
              <span className="text-xs md:text-base md:font-medium">Start Checkup Now</span>
              <FaArrowRight className="text-xs md:text-base" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row gap-3 pl-4 pb-4 md:gap-10 md:pl-16">
            <div className="flex flex-col justify-between bg-white hover:shadow-2xl hover:scale-[105%] transition-transform duration-1500 rounded-3xl w-[150px] h-[150px] p-3 md:w-[200px] md:h-[200px] md:p-5 Background">
              <div className="flex flex-row justify-between items-center md:gap-3">
                <div className="border-[1px] md:border-2 border-white rounded-3xl">
                  <span className="text-[10px] md:text-base text-white p-2">
                    Quality Of Life
                  </span>
                </div>
                <div>
                  <GrCircleInformation className="scale-[100%] text-white md:scale-[140%]" />
                </div>
              </div>
              <div className="flex flex-row items-center md:justify-between md:gap-3">
                <div>
                  <span className="text-[10px] md:text-base text-white">
                    Emotional Health Service
                  </span>
                </div>
                <div>
                  <MdOutlineArrowCircleRight className="transform -rotate-45 text-white md:scale-[230%]" />
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-between hover:shadow-2xl hover:scale-[105%] transition-transform duration-1500 bg-white rounded-3xl md:w-[200px] md:h-[200px] md:p-5">
              <div className="flex flex-row justify-between items-center md:gap-3">
                <div className="border-2 border-black rounded-3xl">
                  <span className="md:p-2">Satistical Data</span>
                </div>
                <div>
                  <GrCircleInformation className="md:scale-[140%]" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <span className="md:text-3xl md:font-bold">95%</span>
              </div>
              <div className="flex flex-row justify-between md:gap-3">
                <div>
                  <span>Successful Diagnosis</span>
                </div>
                <div className="flex">
                  <MdOutlineArrowCircleRight className="transform -rotate-45 items-center md:scale-[230%]" />
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-between hover:shadow-2xl hover:scale-[105%] transition-transform duration-1500 bg-white rounded-3xl md:gap-2 md:w-[200px] md:h-[200px] md:p-4">
              <div className="flex flex-row justify-between items-center md:gap-1 md:p-0">
                <div className="flex flex-row border-2 border-black rounded-3xl">
                  <span className="md:p-1 md:text-sm md:px-2">
                    Understanding
                  </span>
                </div>
                <div>
                  <span>20%</span>
                </div>
                <div>
                  <IoIosArrowRoundUp className="md:scale-[140%]" />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center border-2 border-black border-opacity-45 rounded-full">
                <div>
                  <img
                    src={Girl}
                    alt="Girl.img"
                    className="rounded-full md:h-[30px]"
                  ></img>
                </div>
                <div className="flex flex-col font-medium md:px-2">
                  <span className="md:text-sm">Henry Jay</span>
                  <span className="md:text-sm">
                    24 y.0 <span className="text-black opacity-55">Male</span>
                  </span>
                </div>
                <div>
                  <IoIosArrowForward className="md:scale-[120%]" />
                </div>
              </div>
              <div className="flex flex-col justify-between items-center md:gap-3">
                <div>
                  <span className="font-semibold text-black opacity-85">
                    8% From Last Week
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center md:gap-8">
                  <div className="flex flex-row">
                    <span className="font-bold md:text-3xl ">96.5</span>
                    <div className="flex items-end">
                      <span>/pr</span>
                    </div>
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
    </div>
  );
};

export default Main;
