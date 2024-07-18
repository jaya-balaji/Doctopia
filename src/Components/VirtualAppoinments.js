import React from "react";
import { RiChatVoiceLine } from "react-icons/ri";
import { TbPlayerRecordFilled } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "./Context";


const VirtualAppoinments = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div onClick={()=>setValue(false)} id="facility" className="flex flex-col gap-8 pt-[4vh] px-4 pb-[6vh] md:flex-row md:gap-5 md:px-16 md:pt-[6vh]">
      <div className="flex flex-row bg-white shadow-2xl hover:shadow-2xl hover:scale-[102%] transition-transform duration-500 rounded-3xl h-[40vh] items-center md:items-baseline md:h-auto w-[100%] p-3 md:w-[55%] md:p-6 md:pr-3">
        <div className="flex flex-col justify-between rounded-3xl h-[35vh] w-[40vh] p-3 md:h-[68vh] md:w-[45vh] md:p-7 BackgroundAtVACalBig">
          <div className="flex flex-row justify-between">
            <div className="BackgroundAtVACalSmall flex flex-row justify-end rounded-2xl shadow-black shadow-2xl h-20 w-16 p-1 md:p-2 md:h-32 md:w-24">
              <RiChatVoiceLine className="text-white"/>
            </div>
            <div className="flex flex-row justify-center items-center bg-white bg-opacity-80 rounded-3xl gap-1 h-4 w-12 px-[1px] py-[1px] md:gap-1 md:h-5 md:w-auto md:py-3 md:px-2">
              <TbPlayerRecordFilled className="text-red-600 text-[6px] md:text-base" />
              <span className="text-[4px] md:text-base md:font-medium">19 : 00 Minute</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <RiChatVoiceLine className="text-white opacity-95 md:scale-[200%]" />
            </div>
            <div>
              <span className="text-white font-semibold opacity-95 text-lg">
                Dr.Cristover Jay
              </span>
            </div>
            <div className="flex flex-row bg-slate-100 bg-opacity-25 items-center justify-center rounded-3xl gap-2 p-2 md:gap-4 md:p-3">
              <div className="bg-white bg-opacity-45 rounded-full p-1 md:p-4">
                <HiOutlineSpeakerWave className="text-white md:scale-[180%]" />
              </div>
              <div className="bg-white bg-opacity-45 rounded-full p-1 md:p-4">
                <HiOutlineVideoCamera className="text-white md:scale-[170%]" />
              </div>
              <div className="bg-white bg-opacity-45 rounded-full p-1 md:p-4">
                <HiOutlineMicrophone className="text-white md:scale-[160%]" />
              </div>
              <div className="bg-white bg-opacity-45 rounded-full p-1 md:p-4">
                <HiOutlineXMark className="text-white md:scale-[180%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-76 md:pr-0 md:w-[60%]">
          <div className="flex justify-center items-center border-b-2 p-3 relative md:p-5">
            <span className="font-semibold text-2xl md:text-5xl">
              Virtual Appointments
            </span>
            <div className="bg-slate-200 bg-opacity-45 rounded-full absolute top-0 right-4 p-2 md:top-[0px] md:right-[10px] md:p-4">
                <HiOutlineXMark className="text-black md:scale-[150%]" />
            </div>
          </div>
          <div className="flex flex-col border-b-2 p-3 gap-2 md:p-5 md:gap-4">
            <div>
              <span className="rounded-3xl border-black border-opacity-55 p-1 text-[8px] border-[1px] md:border-2 md:text-base md:px-2 md:p-1">
                Easy To Use
              </span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <span className="md:text-2xl font-semibold">
                  Experience A User-Centric telehealth platform
                </span>
              </div>
              <div>
                <IoArrowForwardCircleOutline className="md:scale-[300%] scale-[150%] -rotate-45" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b-2 p-3 md:p-8 md:px-5">
            <span className="md:text-2xl font-semibold">Secure</span>
            <div>
              <IoArrowForwardCircleOutline className="md:scale-[300%] scale-[150%] -rotate-45 opacity-50" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3 md:p-5">
            <div className="flex flex-row gap-2 md:gap-5">
              <span className="md:text-2xl text-[16px] font-semibold">24/7</span>
              <div className="flex flex-row items-end gap-1 md:gap-2">
                <div>
                  <span className="border-2 rounded-3xl text-[8px] md:text-base p-1">
                    Accessibility
                  </span>
                </div>
                <div>
                   <BsExclamationCircle className="text-[12px] md:text-lg" />
                </div>
              </div>
            </div>
            <div>
              <IoArrowForwardCircleOutline className="md:scale-[300%] scale-[150%] -rotate-45 opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white hover:shadow-2xl hover:scale-[102%] transition-transform duration-500 rounded-3xl shadow-2xl p-3 md:p-0 md:pl-4">
        <div className="flex items-center border-b-2 p-4 md:p-5 md:w-[95%]">
          <span className="font-semibold text-4xl w-[55%] md:w-[60%] md:text-6xl ">Advantages & Facilities</span>
        </div>
        <div className="flex items-center justify-between border-b-2 p-4 md:p-0 md:py-7 md:px-7 md:w-[95%]">
          <div className="flex flex-row items-center gap-2 md:gap-5">
            <div>
              <span className="text-xl md:text-2xl font-semibold">Medication Assistence</span>
            </div>
            <div>
              <HiOutlineDotsHorizontal className="text-xl"/>
            </div>
          </div>
          <div>
            <MdKeyboardArrowRight className="md:scale-[250%] scale-[150%]"/>
          </div>
        </div>
        <div className="flex items-center justify-between border-b-2 p-4 md:py-7 md:px-7 md:w-[95%]">
          <div>
              <span className="text-xl md:text-2xl font-semibold">Information Management</span>
          </div>
          <div>
            <MdKeyboardArrowRight className="md:scale-[250%] scale-[150%]"/>
          </div>
        </div>
        <div className="flex flex-row items-center p-4 gap-4 md:py-7 md:gap-7 md:px-7 md:w-[100%]">
            <div className="Doctor rounded-full h-16 w-16 md:h-[12vh] md:w-[12vh]">
            </div>
            <div className="flex flex-col gap-2 md:gap-5">
                <div>
                    <span className="text-black text-opacity-75 md:text-3xl font-bold">Your session Is Booked</span>
                </div>
                <div className="flex flex-row items-center">
                    <span>Read More</span>
                    <div>
                        <MdKeyboardArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex items-start pl-12 pb-6 md:pb-0 md:pl-8 md:h-[13vh]">
                <div className="bg-slate-200 bg-opacity-45 rounded-full md:top-[0px] md:right-[0px] md:p-4">
                    <HiOutlineXMark className="text-black md:scale-[150%]" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAppoinments;
