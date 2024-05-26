/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Codes from "@/app/assets/code.png"
const WisdomCard = ({ content }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="mx-auto h-full p-4 bg-white border rounded-[4px] shadow-sm flex flex-col justify-between cursor-pointer animate-pulse">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="bg-gray-200 py-1 px-2 rounded-sm font-semibold text-xs leading-4"></span>
                                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-lg leading-6 text-start font-semibold h-5 bg-gray-200 rounded animate-pulse"></h2>
                                <p className="mt-2 text-gray-200 leading-7 tracking-normal h-3 bg-gray-200 rounded animate-pulse"></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-10 h-10 mr-3 rounded-xl bg-gray-200 animate-pulse"></div>
                            <span className="font-medium  text-gray-200 cursor-pointer tracking-normal h-3 bg-gray-200 rounded animate-pulse"></span>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <div className="h-full mx-auto bg-white border rounded-md shadow-sm w-full relative max-w-[920px]">

                        <Image className='absolute top-4 right-10 rotate-180' src={Codes} alt='' width={17} height={13} />

                        <div className="text-[#0e0e0e] text-[18px] leading-9 tracking-normal py-10 px-[40px]  md:pl-[60px] md:pr-[90px]" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default WisdomCard;