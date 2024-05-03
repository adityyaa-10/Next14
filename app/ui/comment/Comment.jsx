import React from 'react';

const Comment = ({ comment }) => {

    return (
        <div className={`px-4 py-5 border border-[#d7d7d7] bg-white rounded-[10px] mx-auto w-full mb-4`}>
            <p className='text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]'>{comment.content}</p>
        </div>
    );
};

export default Comment;
