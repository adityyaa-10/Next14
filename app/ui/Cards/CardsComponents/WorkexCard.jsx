/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
const WorkexCard = ({ title, company, yoe }) => {
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
                    <div className=" h-full py-3 px-2 mx-auto bg-white border rounded-md shadow-sm grid grid-cols-4 gap-4 items-center w-full">
                        <div className="col-span-2">
                            <div className="overflow-y-auto">
                                <p className="text-[#0e0e0e] leading-7 tracking-normal ml-4">
                                    {title}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-blue-600 ml-0 lg:ml-24 text-base tracking-normal font-medium" tabindex="0" role="link">
                                {company}
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h2 href="#" className="text-lg mr-6 leading-7 font-semibold text-gray-800 tracking-normal text-right">
                                {yoe}
                            </h2>
                        </div>
                    </div>



                </div>

            )
            }
        </div >
    );
};

export default WorkexCard;