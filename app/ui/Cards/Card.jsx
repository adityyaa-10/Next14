/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { CiBookmark } from "react-icons/ci";


const TestimonialCard = ({ status, title, description, author }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`p-2 w-full sm:w-1/2 lg:w-1/3 ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="max-w-2xl h-full p-4 bg-white border rounded-lg shadow-sm animate-pulse">
                        {/* Status and Bookmark section */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-gray-300 h-4 w-16 rounded-sm"></span>
                            {/* Placeholder for status indicator */}
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            {/* Placeholder for bookmark icon */}
                        </div>

                        {/* Title and Description section */}
                        <div className="mb-4">
                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                            {/* Placeholder for title */}
                            <div className="h-2 bg-gray-200 rounded mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded mb-1 w-1/2"></div>
                            {/* Placeholder for description */}
                        </div>

                        {/* Author section */}
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                            {/* Placeholder for avatar image */}
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 w-20 mb-1 rounded"></div>
                                <div className="h-3 bg-gray-300 w-32 rounded"></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="max-w-2xl h-full p-4 bg-white border rounded-[4px] shadow-sm flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="bg-green-300 py-[2px] px-1 rounded-sm font-medium text-sm text-black">{status}</span>
                            <CiBookmark size={24} />
                        </div>
                        <div className="mt-2">
                            <h2 href="#" className="text-lg leading-7 font-semibold text-gray-800" tabIndex="0" role="link">
                                {title}
                            </h2>
                            <p className="mt-2 text-gray-700 leading-7">{description}</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <img
                            className="hidden object-cover w-10 h-10 mr-3 rounded-xl sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                            alt="avatar"
                        />
                        <a className="font-medium leading-10 text-gray-800 cursor-pointer" tabIndex="0" role="link">
                            {author}
                        </a>
                    </div>
                </div>

            )}
        </div>
    );
};

export default TestimonialCard;
