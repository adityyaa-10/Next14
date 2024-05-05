"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../editor/NewEditor'), { ssr: false });

const Form = () => {
    const [data, setData] = useState('');
    return (
        <div className='bg-white max-w-[929px] mx-auto my-2 lg:my-11 rounded-[10px] p-4 lg:p-8 border border-[#d7d7d7]'>
            <h1 className='text-xl font-medium leading-[27.28px] text-[#141417] tracking-tighter'>Create A Post</h1>
            <form className="mt-10">
                <div className="mb-6">
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter short title"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        className="block w-full mt-1 p-2 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter long title"
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
                    <div className='pt-2 overflow-y-auto'>
                        <Editor value={data} onChange={setData} holder="editorjs-container" />
                    </div>
                </div>
                <div className="mb-6">
                    <textarea
                        className="block h-[180px] w-full p-4 border border-[#d7d7d7] rounded focus:outline-none focus:border-blue-500"
                        rows="3"
                        placeholder="Lesson"
                    ></textarea>
                </div>
                {/* Comment Input Field */}
                <div className="flex justify-end">
                    <p className="pt-2 pb-6 ml-1 font-medium text-[#034D13] tracking-[0.01em] text-[15px] leading-[18.6px]">
                        Add Comment
                    </p>
                </div>
                <div className="mb-6">
                    <textarea
                        type="text"
                        className="block w-full h-[112px] p-2 border border-[#d7d7d7] rounded-t focus:outline-none focus:border-blue-500"
                        placeholder="Write a comment..."
                    />
                    <div className="flex justify-end items-center  border border-t-0 py-3 px-5 border-[#d7d7d7]">
                        <button className="text-[#4E88D8] text-[15px] leading-[18.6px] font-medium focus:outline-none mr-8">Reply</button>
                        <button className="text-[#F25424] text-[15px] leading-[18.6px] font-medium focus:outline-none">Delete</button>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
