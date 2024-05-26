/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
const ContentLibrary = ({ url, imgUrl, title, author, description }) => {
    return (
        <Link href={url} target='_blank'>
            <div className="flex px-[25px] py-[25px] border border-[#d7d7d7] bg-white rounded-[10px] sm:flex-row flex-col">
                <div className=" sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center ">
                    <img width={200} height={112} className="w-[200px] h-[112.5px] rounded-[10px]" src={imgUrl} alt="" />
                </div>
                <div>
                    <h2 className="text-[#141417] text-lg title-font font-medium mb-2 line-clamp-1 uppercase max-w-[690px]">{title}</h2>
                    <h3 className="text-[#3F3F42] leading-[21.86px] text-base font-semibold inline-flex items-center">
                        {author}
                    </h3>
                    <p className="leading-relaxed text-base text-[#24201fce] mt-2 line-clamp-2 max-w-[670px]">{description}</p>

                </div>
            </div>
        </Link>
    )
}

export default ContentLibrary
