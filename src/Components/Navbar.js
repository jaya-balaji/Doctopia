import React from 'react';
import icon from "../Assets/icon.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { useState } from 'react';


const Navbar = () => {
    const [change,setchange] = useState(false)
  return (
    <div className='flex flex-row p-3 px-8'>
      <div className='flex flex-[2] flex-row gap-2 items-center justify-start'>
        <div>
            <img src={icon} className="h-8 w-12" alt='icon.png'></img>
        </div>
        <div>
            <span className='font-bold text-xl'>DOCTOPIA</span>
        </div>
      </div>
      <div className='flex flex-[6] flex-row gap-2 items-center justify-center'>
        <span className='font-semibold p-2 hover:border-black border-transparent border-2 rounded-3xl px-5'>Home</span>
        <span className='font-semibold p-2 hover:border-black border-transparent border-2 rounded-3xl px-5'>About Us</span>
        <span className='font-semibold p-2 hover:border-black border-transparent border-2 rounded-3xl px-5'>Reviews</span>
        <span className='font-semibold p-2 hover:border-black border-transparent border-2 rounded-3xl px-5'>Procedures</span>
        <span className='font-semibold p-2 hover:border-black border-transparent border-2 rounded-3xl px-5'>Blog</span>
      </div>
      <div className='flex flex-row flex-[2] gap-6 items-center justify-start duration-1000'>
        <div>
            <span className='font-medium'>Start Program</span>
        </div>
            {change && <div className='pl-2 flex items-center justify-start bg-slate-950 rounded-3xl'>
            <span className='p-2  text-white  text-left'>Menu</span>
            <RiRadioButtonFill className='text-white rounded-lg h-10 w-10' onClick={()=>setchange(false)}/>
        </div>}
            {!change && <div className='pr-2 flex items-center justify-start bg-slate-950 rounded-3xl'>
            <RiRadioButtonFill className='text-white rounded-lg h-10 w-10' onClick={()=>setchange(true)}/>  
            <span className='p-2  text-white  text-center'>Items</span>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
