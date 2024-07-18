import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./Context";


const GetInTouch = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div onClick={()=>setValue(false)} id='reachUs' className='flex flex-col p-6 px-8 gap-4 md:gap-6 md:p-16'>
            <div>
                <span className='text-lg md:text-xl'>View Our Medical Services  And Reach Out</span>
            </div>
            <div>
                <span className='text-5xl md:text-9xl'>GET IN TOUCH.</span>
            </div>
            <div className='md:flex flex-col font-semibold text-black text-opacity-50   md:text-xl'>
                <span>Get In Contact: Let's Discuss Your Needs, Goals, And begin</span>
                <span> Your personalized Wellness Journey Together</span>
            </div>
            <div className='flex items-center justify-center md:justify-start'>
                <div className='flex flex-row items-center hover:shadow-2xl hover:scale-[105%] transition-transform duration-500 justify-between gap-3 p-3 px-6 md:gap-6 md:p-3 md:px-6 text-white bg-black rounded-3xl'>
                    <span>Work With Us</span>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
