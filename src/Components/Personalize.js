import React from 'react';
import { useContext } from "react";
import { MyContext } from "./Context";

const Personalize = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div onClick={()=>setValue(false)} id='plans' className='flex flex-col my-2 gap-3 md:my-10 md:gap-5'>
            <div className='flex flex-row p-2 pb-0 md:p-8'>
                <div className='hidden md:flex flex-col items-center justify-center flex-[2] relative'>
                    <div className='md:rounded-3xl absolute border-[1px] md:border-2  md:right-12 md:top-2'>
                        <span className='text-[8px] md:text-base px-[4px] p-[2px] md:p-2 md:px-4'>Health</span>
                    </div>
                    <div className='border-2 rounded-3xl absolute left-2 bottom-2 md:left-6 md:bottom-2 border-cyan-700'>
                        <span className='text-[8px] md:text-base p-1 md:p-2 md:px-4'>Accessibility</span>
                    </div>
                </div>
                <div className='flex flex-col items-center flex-[6] font-semibold text-2xl md:text-6xl'>
                    <span>Personalized Health Solutions,</span>
                    <span>your Wellness Our Priority</span>
                </div>
                <div className='hidden md:flex flex-col items-center justify-center flex-[2] relative md:gap-8'>
                    <div className='border-2 rounded-3xl absolute left-12 top-2'>
                        <span className='md:p-2 md:px-4'>Services</span>
                    </div>
                    <div className='border-2 rounded-3xl absolute border-cyan-700 md:bottom-2 md:right-6'>
                        <span className='md:p-2 md:px-4'>Checkup</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center text-[8px] md:text-xl text-slate-500 text-opacity-80'>
                <span>Tailored Care Plans: Our Commitment To Crafting Personalized</span>
                <span>Solutions For Your OngoingWellness  Journey</span>
            </div>
        </div>
    );
}

export default Personalize;
