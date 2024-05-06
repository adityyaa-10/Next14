
const FirstCard = ({ title, content, tags, comments, date }) => {
    return (
        <div className="pl-[25px] py-[25px] border border-[#d7d7d7] bg-white rounded-[10px]">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium leading-[27.28px] text-[#141417] tracking-tighter" tabIndex="0" role="link">{title}</h2>
            </div>

            <div className="pt-4">
                <p className="text-[#3F3F42] text-base font-normal leading-7 tracking-tight text-left max-w-[811px]">{content}</p>
            </div>

            <div className="pt-4">
                <p className="text-[#4A94FA] text-base leading-7 font-normal tracking-tighter">{tags}</p>
            </div>


            <div className='mt-4 flex items-center '>
                {/* Comment Button */}
                <div className="flex items-center text-[#3F3F42] text-sm font-normal border border-[#D7D7D7] px-2 py-1 rounded">
                    <svg className="mr-2 w-4 h-4" viewBox="0 0 20 20" fill="#707680">
                        <path fillRule="evenodd" d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V4z" clipRule="evenodd" />
                    </svg>
                    <span>{comments}</span>
                </div>
                <div className="text-[#707680] font-medium text-sm ml-3 border border-[#D7D7D7] px-2 py-1 rounded">{date}</div>
            </div>

        </div>
    )
}

export default FirstCard
