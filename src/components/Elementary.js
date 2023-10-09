import React from 'react';
import image1 from './assets/settings-icon-28.png';
import image2 from './assets/World-Wide-Web-Address-PNG.png';
import image3 from './assets/224641.png';


const Elementary = () => {
    return (
        <div className='h-auto w-full p-10 bg-slate-100 opacity-90'>
            <div className="flex flex-wrap justify-center gap-8  md:gap-10 md:pl-5 md:pr-5 lg:gap-16 bg-white ">
                <div className='flex-col h-[420px] rounded-[10px] shadow-lg w-[90%] md:w-[380px] border-b-4 border-yellow-500 border bg-white overflow-hidden first-letter:'>
                    <div className='flex justify-center mt-10 h-32 w-34'>
                        <img src={image1} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Strong Foundation</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'> Founded in 2005 by a team of directors with over 50 years experience, Heritage is built to last and grow into a bright future.​</p>
                        </div>
                    </div>
                </div>

                <div className='flex-col mt-10 h-[420px] rounded-[10px] shadow-lg w-[90%] md:w-[380px] border-b-4 border-cyan-500 border bg-white overflow-hidden first-letter:'>
                    <div className='flex justify-center mt-10 h-32 w-34'>
                        <img src={image2} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Global Community​</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'>Founded in 2019 by Bina Das, Covenant is built to last and grow into a bright future.</p>
                        </div>
                    </div>
                </div>

                <div className='flex-col mt-0 h-[420px] rounded-[10px] shadow-lg w-[90%] md:w-[380px] border-b-4 border-green-500 border bg-white overflow-hidden first-letter:'>
                    <div className='flex justify-center mt-10 h-32 w-34'>
                        <img src={image3} alt='StoreImage' className='md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center transition-transform duration-300 transform hover:scale-110' />
                    </div>
                    <div className='mx-2 md:mx-6 mt-10 mb-4'>
                        <h1 className='text-[28px] font-bold text-center'>Proven Results</h1>
                        <div className='text-gray-600 text-[14px] mt-3 text-center'>
                            <p className='flex gap-[2px] text-xl'>We don't teach from Theory. We teach from experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elementary;