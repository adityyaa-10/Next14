"use client";
import React from 'react';
import Editor from '../editor/Editor';

const Form = () => {
    return (
        <div className='bg-white max-w-[929px] mx-auto my-2 lg:my-11 rounded-[10px] p-4 lg:p-8 border border-[#d7d7d7]'>
            <h1 className='text-xl font-medium leading-[27.28px] text-[#141417] tracking-tighter'>Create A Post</h1>
            <form className="mt-10">
                <div className="mb-6">
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter title"
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        className="block w-full mt-1 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        rows="3"
                        placeholder="Post Brief"
                    ></textarea>
                </div>
                <div className="mb-6 flex">
                    <input
                        type="text"
                        className="block w-3/4 mt-1 mr-6 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        placeholder="Tags"
                    />
                    <input
                        type="text"
                        className="block w-1/4 mt-1 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        placeholder="Date"
                    />
                </div>
                <div className='w-full border border-[#d7d7d7] rounded mb-6'>
                    <div className='max-h-[180px] overflow-y-auto'>
                        <Editor />
                    </div>
                </div>
                <div className="mb-6">
                    <textarea
                        className="block h-[180px] w-full p-4 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        rows="3"
                        placeholder="Lesson"
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
};

export default Form;
