import React from 'react';
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Main = () => {
  return (
    <div className='px-16'>
    <div className='bg-gradient-to-br from-customCol1 via-customCol2 to-customCol3 rounded-3xl md:px-16 md:h-[100vh]'>
        <div className='flex flex-col md:p-16 md:pt-24 md:gap-6'>
            <div className='flex flex-row items-center text-white md:gap-4 md:pl-4'>
                <div>
                    <HiOutlineCubeTransparent className='text-white bg-blue-500 md:p-1 md:scale-[200%] md:rounded-full'/>
                </div>
                <div>
                    <span className='md:text-xl'>Our Clinic's Services + Checkups</span>
                </div>
            </div>
            <div className='md:w-[70%]'>
                <span className='text-white md:font-medium md:text-8xl'>Revolutionizing Healthcare Tech </span>
            </div>
            <div className='flex flex-row bg-white items-center md:gap-4 md:p-2 md:w-48 md:rounded-full'>
                <span className='font-medium'>Start Checkup Now</span>
                <FaArrowRight />
            </div>
        </div>
        <div className='flex flex-row gap-10 md:pl-16'>
            <div className='flex flex-col justify-between bg-white rounded-3xl md:w-[200px] md:h-[200px] md:p-5'>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className='border-2 border-black rounded-3xl'>
                        <span className='p-2'>Quality Of Life</span>
                    </div>
                    <div>
                        <GrCircleInformation className='md:scale-[140%]'/>
                    </div>
                </div>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className=''>
                        <span>Emotional Health Service</span>
                    </div>
                    <div>
                        <MdOutlineArrowCircleRight className='scale-[150%] transform -rotate-45'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between bg-white rounded-3xl md:w-[200px] md:h-[200px] md:p-5'>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className='border-2 border-black rounded-3xl'>
                        <span className='p-2'>Quality Of Life</span>
                    </div>
                    <div>
                        <GrCircleInformation className='md:scale-[140%]'/>
                    </div>
                </div>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className=''>
                        <span>Emotional Health Service</span>
                    </div>
                    <div>
                        <MdOutlineArrowCircleRight className='scale-[150%] transform -rotate-45'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between bg-white rounded-3xl md:w-[200px] md:h-[200px] md:p-5'>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className='border-2 border-black rounded-3xl'>
                        <span className='p-2'>Quality Of Life</span>
                    </div>
                    <div>
                        <GrCircleInformation className='md:scale-[140%]'/>
                    </div>
                </div>
                <div className='flex flex-row gap-3 justify-between items-center'>
                    <div className=''>
                        <span>Emotional Health Service</span>
                    </div>
                    <div>
                        <MdOutlineArrowCircleRight className='scale-[150%] transform -rotate-45'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}  

export default Main;
