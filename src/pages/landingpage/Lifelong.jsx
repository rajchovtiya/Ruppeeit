import React from 'react'
import Features from './Features'

function Lifelong() {
    return (
        <div className='padding2 z-[340]'>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className='text-4xl font-bold seconfdont'>We understand money is </h1>
                <h1 className='text-4xl font-bold seconfdont'>a lifelong journey.</h1>
                <p className='mt-3 seconfdont font-medium text-[19px] text-[#262626]'>Learning about money is not a one time class, it’ sa continuous journey</p>
            </div>
            <Features />
        </div>
    )
}

export default Lifelong
