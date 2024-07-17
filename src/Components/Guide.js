import React from 'react';

const Guide = () => {
  return (
    <div className='px-8 py-4 md:px-16 md:py-4 md:pb-8'>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row'>
            <div className='text-2xl md:text-5xl font-bold md:font-semibold md:pr-24 md:w-[85%]'>
                <span>Guiding You On Your Personal Journey To Optimal Health</span>
            </div>
            <div className='flex flex-col font-semibold text-black text-lg text-opacity-50 md:pl-12 md:w-15%'>
                <span>Holistic Health Guidance:</span>
                <span>Comprehensive Support For Your Personalized Health Journey</span>
            </div>
        </div>
    </div>
  );
}

export default Guide;