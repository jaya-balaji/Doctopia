import React from 'react';
import icon from "../Assets/icon.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { useState } from 'react';


const Navbar = () => {
    const [change,setchange] = useState(false)

  return (
    <div className='flex flex-row py-4 px-4 w-[100%] gap-3 md:py-6 md:px-16 bg-slate-500'>
      <div className='flex flex-row items-start md:flex-[2] md:gap-2 md:items-center md:justify-start'>
        <div>
            <img src={icon} className="hidden md:block md:h-10 md:w-16" alt='icon.png'></img>
        </div>
        <div>
            <span className='font-bold text-base md:text-3xl'>DOCTOPIA</span>
        </div>
      </div>
      <div className='hidden md:flex md:flex-[6] md:flex-row md:gap-2 md:items-center md:justify-center'>
        <span className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Home</span>
        <span className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>About Us</span>
        <span className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Reviews</span>
        <span className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Procedures</span>
        <span className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Blog</span>
      </div>
      <div className='flex flex-row bg-slate-300 items-end justify-end gap-1 md:flex-[2] md:gap-6 md:items-center md:justify-start'>
        <div>
            <span className='text-[8px] md:text-lg md:font-semibold'>Start Program</span>
        </div>
            {change && <div className='pl-2 flex md:items-center md:justify-start bg-slate-950 md:rounded-full'>
            <span className='md:p-2 text-white  text-left'>Menu</span>
            <RiRadioButtonFill className='text-white rounded-lg md:h-12 md:w-12' onClick={()=>setchange(false)}/>
        </div>}
            {!change && <div className='py-[3px] md:pr-2 flex items-center justify-start bg-slate-950 rounded-full'>
            <RiRadioButtonFill className='text-white md:rounded-lg md:h-12 md:w-12' onClick={()=>setchange(true)}/>  
            <span className='text-[6px] text-white text-center md:p-2 md:text-base'>Items</span>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
