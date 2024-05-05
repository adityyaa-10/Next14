/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
const TechCard = ({ title, author, content }) => {
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
                    <div className="h-full mx-auto bg-white border rounded-md shadow-sm w-full p-4">

                        <div className='mb-2'>
                            <p className="text-lg leading-7  text-start font-semibold text-gray-800 tracking-normal">
                                {title}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-blue-600 text-base tracking-normal font-medium">
                                {author}
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="text-[#0e0e0e] leading-7 tracking-normal" dangerouslySetInnerHTML={{ __html: content }} />

                        </div>
                    </div>





                </div>

            )
            }
        </div >
    );
};

export default TechCard;