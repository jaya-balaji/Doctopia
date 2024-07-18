import React from 'react';
import icon from "../Assets/icon.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { MyContext } from './Context';
import { useContext } from 'react';



const Navbar = () => {
    const [change,setchange] = useState(false)
    // const[showOptions,setValue]=useState(false)
    const { value, setValue } = useContext(MyContext);

  return (
    <div className='flex flex-row sticky z-10 top-0 bg-white py-4 px-4 gap-3 w-[100%] justify-between md:py-6 md:px-16'>
        <div className={`absolute top-12 left-0 h-[100vh] w-[75%] flex flex-col bg-white transition-all duration-1000 ease-in-out transform ${value ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div onClick={()=>setValue(false)} className='flex flex-col justify-center items-center w-[100%] h-[10vh] border-b-2'>
          <a href='#home' className='font-bold'>Home</a> 
        </div>
        <div onClick={()=>setValue(false)} className='flex flex-col justify-center items-center w-[100%] h-[10vh] border-b-2'>
          <a href='#facility' className='font-bold'>facility</a>
        </div>
        <div onClick={()=>setValue(false)} className='flex flex-col justify-center items-center w-[100%] h-[10vh] border-b-2'>
          <a href='#plans' className='font-bold'>Plans</a>
        </div>
        <div onClick={()=>setValue(false)} className='flex flex-col justify-center items-center w-[100%] h-[10vh] border-b-2'>
          <a href='#reachUs' className='font-bold'>Reach Us</a>
        </div>
        <div onClick={()=>setValue(false)} className='flex flex-col justify-center items-center w-[100%] h-[10vh]'>
          <a href='#about' className='font-bold'>About</a>
        </div>
      </div>
      <div className='flex flex-row gap-2 md:flex-[2] md:gap-2 md:items-center md:justify-start'>
        <div className='flex items-center justify-center'>
            <img src={icon} className="hidden md:block md:h-10 md:w-16" alt='icon.png'></img>
            <AiOutlineMenu className='justify-center items-center md:hidden' onClick={()=>setValue(true)}/>
        </div>
        <div>
            <span className='font-bold text-xl md:text-3xl'>DOCTOPIA</span>
        </div>
      </div>
      <div className='hidden md:flex md:flex-[6] md:flex-row md:gap-2 md:items-center md:justify-center'>
        <a href='#home' className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Home</a>
        <a href='#facility' className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Facility</a>
        <a href='#plans' className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Plans</a>
        <a href='#reachUs' className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>Reach Us</a>
        <a href='#about' className='md:font-semibold md:p-2 hover:border-black md:border-transparent md:border-2 md:rounded-3xl md:px-5 md:text-lg'>About</a>
      </div>
      <div className='flex flex-row gap-4 md:gap-6 md:justify-start'>
        <div className='flex justify-center items-center'>
            <span className='text-base md:text-lg md:font-semibold hover:underline'>Start Program</span>
        </div>
            {change && <div className='pl-2 flex items-center bg-slate-950 rounded-full' onClick={()=>setValue(false)}>
            <span className=' text-white  text-left text-xs md:p-2'>Menu</span>
            <RiRadioButtonFill className='text-white rounded-lg h-7 w-7 md:h-12 md:w-12' onClick={()=>setchange(false)}/>
        </div>} 
            {!change && <div className='pr-[9px] flex items-center bg-slate-950 rounded-full' onClick={()=>setValue(false)}>
            <RiRadioButtonFill className='text-white rounded-lg h-7 w-7 md:h-12 md:w-12' onClick={()=>setchange(true)}/>  
            <span className='text-white  text-left text-xs md:p-2'>Items</span>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
