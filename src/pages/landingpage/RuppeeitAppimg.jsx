import React from 'react'

function RuppeeitAppimg({ setFromslow }) {
    return (
        <>
            <div className='mt-10 flex gap-3 flex-wrap justify-center md:justify-between w-full'>
                <div className=' w-full h-[760px] xl:w-[540px] rounded-[30px] bg-black  px-5 relative overflow-hidden flex items-center flex-col'>
                    <h1 className='font-medium text-secondri text-center text-3xl mt-12'>Download the </h1>
                    <h1 className='font-medium text-secondri text-center text-3xl'>Ruppeeit App</h1>

                    <img src="./img/iPhone 13 Pro.png" alt="" className='absolute bottom-[0%] ' />
                </div>
                <div className='flex flex-col gap-4 flex-wrap w-full xl:w-auto'>
                    <div className='w-full h-[250px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative '>Signup in 2 minutes</h1>
                        <img src="./img/SignupEmail 1.png" alt="" className='absolute bottom-0 w-[70%] sm:w-[500px] xl:w-auto ' />
                    </div>
                    <div className='w-full h-[250px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative '>Access videos instantly</h1>
                        <img src="./img/HomeScreenver2. 1.png" alt="" className='absolute bottom-0 w-[70%] sm:w-[500px] xl:w-auto ' />
                    </div>
                    <div className='w-full h-[250px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative '>Save, Like & Share</h1>
                        <img src="./img/Flow screen 1.png" alt="" className='absolute bottom-0 w-[70%] sm:w-[450px] xl:w-auto ' />
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center w-full mt-20 mb-16'>
                <button className='font-bold text-2xl md:text-4xl text-primary 
                py-2 md:py-8 px-28 md:px-40 bg-[#0E0D05] rounded-[50px]' onClick={() => setFromslow(true)}>Join Waitlist</button>
            </div>
        </>
    )
}

export default RuppeeitAppimg
