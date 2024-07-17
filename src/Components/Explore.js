import React from 'react';
import { FaSyringe } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { FaMaskFace } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { CiStethoscope } from "react-icons/ci";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
    return (
        <div className='flex flex-col py-8 px-16 md:py-10 md:px-10'>
            <div className='flex flex-col gap-5 md:flex-row md:gap-8'>
                <div className='flex flex-col w-full md:flex-[4] items-center'>
                    <div className='flex flex-col items-center gap-6 relative shadow-2xl bg-white rounded-3xl p-4 md:p-12 w-full'>
                        <div className='bg-slate-100 p-6 rounded-full'>
                            <FaSyringe className='scale-[200%]' />
                        </div>
                        <div className='p-3 md:p-0'>
                            <span>Orthopedic Services</span>
                        </div>
                        <div className='absolute right-3 top-0 md:top-3 border-2 rounded-full p-1'>
                            <IoAddSharp />
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl w-full md:p-6'>
                        <span></span>
                    </div>
                </div>
                <div className='flex flex-col w-full flex-[4] items-center'>
                    <div className='flex flex-col items-center gap-6 relative bg-[#98acf4] rounded-3xl p-4 md:p-12 w-full'>
                        <div className='bg-blue-300 p-6 md:p-8 rounded-full'>
                            <FaMaskFace className='scale-[200%] text-white' />
                        </div>
                        <div className='p-3 md:p-0'>
                            <span className='text-white'>Muscle Recovery</span>
                        </div>
                        <div className='bg-yellow-600 border-yellow-600 absolute right-3 top-3 rounded-full p-1'>
                            <FiMinus className='text-black'/>
                        </div>
                    </div>
                    <div className='bg-[#98acf4] rounded-3xl p-6'>
                        <span className='text-white'>Optimizing Stratergies And  Practices For Enhanced Muscle Recovery</span>
                    </div>
                </div>
                <div className='flex flex-col flex-[4] items-center'>
                    <div className='flex flex-col items-center gap-6 relative shadow-2xl bg-white rounded-3xl p-4 md:p-12 w-full'>
                        <div className='bg-slate-100 p-6 rounded-full'>
                            <FaBriefcaseMedical className='md:scale-[200%]' />
                        </div>
                        <div className='p-3 md:p-0'>
                            <span >Wellness Support</span>
                        </div>
                        <div className='absolute right-3 top-3 border-2 rounded-full p-1'>
                            <IoAddSharp />
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl p-6'>
                        <span></span>
                    </div>
                </div>
                <div className='flex flex-col flex-[4] items-center'>
                    <div className='flex flex-col items-center gap-6 relative bg-[#98acf4] rounded-3xl p-4 md:p-12 w-full'>
                        <div className='bg-blue-300 p-6 md:p-8 rounded-full'>
                            <CiStethoscope className='scale-[200%] text-white' />
                        </div>
                        <div className='p-3 md:p-0'>
                            <span className='text-white'>Pain Management</span>
                        </div>
                        <div className='bg-yellow-600 border-yellow-600 absolute right-3 top-3 rounded-full p-1'>
                            <FiMinus className='text-black' />
                        </div>
                    </div>
                    <div className='bg-[#98acf4] rounded-3xl p-6'>
                        <span className='text-white'>Comprehensive Guide To Maximizing Muscle Recovery Time And Effective Pain Management</span>
                    </div>
                </div>
                <div className='flex flex-col flex-[4] items-center'>
                    <div className='flex flex-col items-center gap-6 relative shadow-2xl bg-white rounded-3xl p-4 md:p-12 w-full'>
                        <div className='bg-slate-100 p-6 rounded-full'>
                            <TbActivityHeartbeat className='scale-[200%]' />
                        </div>
                        <div className='p-3 md:p-0'>
                            <span >Vascular Health</span>
                        </div>
                        <div className='absolute right-3 top-3 border-2 rounded-full p-1'>
                            <IoAddSharp />
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl p-6'>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center md:p-8'>
                <div className='flex flex-row items-center justify-between gap-3 p-3 px-6 md:gap-6 md:p-3 md:px-6 text-white bg-black rounded-3xl'>
                    <span>Explore Now</span>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
}

export default Explore;
