/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';


const TestimonialCard = ({ date, role, title, description, author }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`py-8 px-6 w-full md:w-1/2 xl:w-1/3 ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="animate-pulse space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-light text-gray-600 w-1/4 h-4 bg-gray-300 rounded"></span>
                            <a className="px-3 py-1 text-sm font-bold text-gray-100 bg-gray-300 rounded"></a>
                        </div>

                        <div className="h-20 w-full bg-gray-300 rounded"></div>

                        <div className="flex items-center justify-between">
                            <div className="flex-1 space-y-2">
                                <span className="h-4 bg-gray-300 rounded"></span>
                                <span className="h-4 bg-gray-300 rounded w-5/6"></span>
                            </div>
                            <div className="flex items-center">
                                <span className="h-8 w-8 bg-gray-300 rounded-full"></span>
                                <span className="ml-2 h-4 bg-gray-300 rounded"></span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600">{date}</span>
                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{role}</a>
                    </div>

                    <div className="mt-2">
                        <h2 href="#" className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</h2>
                        <p className="mt-2 text-gray-600">{description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-blue-600 hover:underline" tabIndex="0" role="link">Read more</a>

                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                            <a className="font-bold text-gray-700 cursor-pointer" tabIndex="0" role="link">{author}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
