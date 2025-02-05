import React from 'react';
import IconB from "../Assets/iconb.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./Context";

const Footer = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div onClick={()=>setValue(false)} id='about' className='p-4'>
            <div className='flex flex-col gap-16 md:justify-between rounded-3xl text-white bg-[#201c1c] p-6 md:p-12 md:py-12 md:h-[85vh]'>
                <div className='flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-6 md:gap-12'>
                        <div className='flex flex-row md:gap-3'>
                            <div>
                                <img src={IconB} alt='IconB.png' className='h-6 md:h-12'></img>
                            </div>
                            <div className='flex items-center justify-center'>
                                <span className='font-semibold md:text-4xl'>DOCTOPIA</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5'>
                            <div>
                                <span className='md:text-2xl'>Subscribe to our newsletter</span>
                            </div>
                            <div>
                                <form className='flex flex-row md:w-[55vh]'>
                                    <div className='flex items-center justify-start border-b-[1px] md:w-[190%]'>
                                        <input type='text' placeholder='Email address' className='text-white bg-[#201c1c] focus:outline-none'></input>
                                    </div>
                                    <div className='flex items-center justify-center bg-white text-black rounded-t-lg p-3 md:p-6'>
                                        <button>
                                            <IoIosArrowForward className='scale-[140%] md:scale-[180%]'/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 md:p-3'>
                            <div className='rounded-full border-white hover:shadow-2xl hover:scale-[105%] transition-transform md:border-[1px] md:p-4'>
                                <FaYoutube className='md:scale-[130%]'/>
                            </div>
                            <div className='rounded-full border-white hover:shadow-2xl hover:scale-[105%] transition-transform duration-500 md:border-[1px] md:p-4'>
                                <SiTiktok className='md:scale-[130%]' />
                            </div>
                            <div className='rounded-full border-white hover:shadow-2xl hover:scale-[105%] transition-transform duration-500 md:border-[1px] md:p-4'>
                                <FaLinkedin className='md:scale-[130%]'/>
                            </div>
                            <div className='rounded-full border-white hover:shadow-2xl hover:scale-[105%] transition-transform duration-500 md:border-[1px] md:p-4'>
                                <RiInstagramFill className='md:scale-[130%]'/>
                            </div>
                            <div className='rounded-full border-white hover:shadow-2xl hover:scale-[105%] transition-transform duration-500 md:border-[1px] md:p-4'>
                                <FaFacebookSquare className='md:scale-[130%]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10 md:gap-44'>
                        <div>
                            <ul className='flex flex-col gap-2 md:gap-6'>
                                <li className='hover:underline md:text-lg font-semibold'>Company</li>
                                <li className='hover:underline font-light'>Features</li>
                                <li className='hover:underline font-light'>Pricing</li>
                                <li className='hover:underline font-light'>About Us</li>
                                <li className='hover:underline font-light'>Contact</li>
                                <li className='hover:underline font-light'>Pricing</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-2 md:gap-6'>
                                <li className='hover:underline md:text-lg font-semibold'>Resources</li>
                                <li className='hover:underline font-light'>Blog</li>
                                <li className='hover:underline font-light'>Customer Stories</li>
                                <li className='hover:underline font-light'>Information</li>
                                <li className='hover:underline font-light'>Legal</li>
                                <li className='hover:underline font-light'>Payments</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-2 md:gap-6'>
                                <li className='hover:underline md:text-lg font-semibold'>Career</li>
                                <li className='hover:underline font-light'>Jobs</li>
                                <li className='hover:underline font-light'>Hiring</li>
                                <li className='hover:underline font-light'>News</li>
                                <li className='hover:underline font-light'>tips & Tricks</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 md:justify-between items-end'>
                    <div>
                        <span className='md:text-9xl text-xl font-bold text-white opacity-10'>DOCTOPIA</span>
                    </div>
                    <div className='flex flex-row gap-2 text-xs md:text-base md:gap-10 font-light'>
                        <div>
                            <div className='hover:underline'>Terms</div>
                        </div>
                        <div>
                            <div className='hover:underline'>Privacy</div>
                        </div>
                        <div>
                            <div className='hover:underline'>Cookies</div>
                        </div>
                        <div>
                            <div className='hover:underline'>Legal</div>
                        </div>
                        <div>
                            <div className='hover:underline'>recalls</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
