import React from "react";

const Comment = ({ comment }) => {
  return (
    <div
      className={`mx-auto mb-4 w-full rounded-[10px] border border-[#d7d7d7] bg-white px-4 py-5`}
    >
      <p className="text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">
        {comment.content}
      </p>
    </div>
  );
};

export default Comment;
