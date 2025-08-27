import React from 'react';

function BookDemo() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden mt-5">
            {/* Background line image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('./img/pattern 1.png')` }}
            ></div>

            {/* Main content */}
            <div className="min-h-[200px] sm:min-h-[400px] flex items-center justify-center flex-col gap-5 relative z-10">
                <div className="w-full max-w-4xl px-2 text-center">
                    <h1 className="text-secondri text-3xl sm:text-4xl lg:text-6xl font-normal">
                        Join as a Creator Today 
                    </h1>
                </div>

                {/* Decorative circular background */}
                <div className="absolute rounded-full bookdemo w-[200px] h-[200px] z-[-1] opacity-5"></div>

                {/* Button */}
                <div

                    className="bg-white text-black py-2 px-7 rounded-xl text-sm sm:text-base mt-8 shadow-md hover:shadow-lg
                     transition cursor-pointer"
                >
                    Join Waitlist
                </div>
            </div>
        </div>
    );
}

export default BookDemo;
