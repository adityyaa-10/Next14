import Link from "next/link"

const FirstCard = () => {
    return (
        <div className="px-4 lg:px-8 py-4 border border-[#d7d7d7] bg-white rounded-[10px]">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium leading-[27.28px] text-[#141417] tracking-tighter" tabIndex="0" role="link">Any leads or referrals please!</h2>
                <div className='flex'>
                    <svg className='mr-3 w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H13.925L11.925 5H5V19H19V12.05L21 10.05V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9 15V10.75L18.175 1.575C18.375 1.375 18.6 1.225 18.85 1.125C19.1 1.025 19.35 0.974998 19.6 0.974998C19.8667 0.974998 20.1208 1.025 20.3625 1.125C20.6042 1.225 20.825 1.375 21.025 1.575L22.425 3C22.6083 3.2 22.75 3.42083 22.85 3.6625C22.95 3.90417 23 4.15 23 4.4C23 4.65 22.9542 4.89583 22.8625 5.1375C22.7708 5.37917 22.625 5.6 22.425 5.8L13.25 15H9ZM11 13H12.4L18.2 7.2L17.5 6.5L16.775 5.8L11 11.575V13Z" fill="#141417" fillOpacity="0.6" />
                    </svg>
                    <Link href={'/fullpost'}>
                        <svg className="w-5 h-5" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#141417" fillOpacity="0.6" />
                        </svg>
                    </Link>
                </div>

            </div>

            <div className="pt-4">
                <p className="text-[#3F3F42] text-base font-normal leading-7 tracking-tight text-left max-w-[811px]">I recently graduated with an MS degree in Computer Science (USA). The market condition is very bad here and I am unable to get an interview chance or OA. It is very tough here and my ...</p>
            </div>

            <div className="pt-4">
                <p className="text-[#4A94FA] text-base leading-7 font-normal tracking-tighter">#masters #abroad #usa</p>
            </div>


            <div className='mt-4 flex items-center '>
                {/* Comment Button */}
                <div className="flex items-center text-[#3F3F42] text-sm font-normal border border-[#D7D7D7] px-2 py-1 rounded">
                    <svg className="mr-2 w-4 h-4" viewBox="0 0 20 20" fill="#707680">
                        <path fillRule="evenodd" d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V4z" clipRule="evenodd" />
                    </svg>
                    <span>12</span>
                </div>
                <div className="text-[#707680] font-medium text-sm ml-3 border border-[#D7D7D7] px-2 py-1 rounded">April, 24</div>
            </div>

        </div>
    )
}

export default FirstCard
