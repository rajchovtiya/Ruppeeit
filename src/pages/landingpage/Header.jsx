import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Header({setFromslow}) {
    return (
        <div
            className="mt-10 h-[380px] md:h-[600px] lg:h-[650px] flex items-center relative  z-[-1]"
            style={{ backgroundImage: "url('./img/pattern 1.png')" }}
        >
            <div className='padding2 z-[30] w-full md:w-3/4 lg:w-2/3'>
                {/* Heading */}
                <div className='mb-4 md:mb-7'>
                    <h1 className='text-secondri text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug'>
                        India’s Financial
                    </h1>
                    <h1 className='text-secondri text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug'>
                        Literacy App
                    </h1>
                </div>

                {/* Subheading */}
                <div className='mb-6 md:mb-10'>
                    <h2 className='text-primary text-xl sm:text-2xl md:text-3xl font-normal'>
                        Abb Har Indian Banega
                    </h2>
                    <h2 className='text-primary text-xl sm:text-2xl md:text-3xl font-normal'>
                        Money Expert
                    </h2>
                </div>

                {/* Button */}
                <button className='bg-primary flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-3xl font-medium text-sm sm:text-base md:text-lg navboxsedo' onClick={() => setFromslow(true)}>
                    Join Waitlist <FaAngleRight />
                </button>
            </div>

            {/* Decorative Images */}
            <div className='absolute top-[-30%] md:top-[-21%] h-full z-[-1] left-0'>
                <img src="./img/Vector (1).png" alt="" className='w-full md:w-auto' />
            </div>
            <div className='absolute right-0 top-[-30%] md:top-[-40%] h-full z-[-1]'>
                <img src="./img/Vector (2).png" alt="" className='w-full md:w-auto' />
            </div>
            <div className='absolute right-0 bottom-0 md:bottom-0 h-full z-[-1]'>
                <img src="./img/Vector 1.png" alt="" className='w-full md:w-auto' />
            </div>
        </div>
    )
}

export default Header
