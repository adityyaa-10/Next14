/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Codes from "@/app/assets/code.png"
const WisdomCard = ({ content }) => {

    return (
        <div>
            <div className="h-full mx-auto bg-white border rounded-md shadow-sm w-full relative max-w-[920px]">

                <Image className='absolute top-4 right-10 rotate-180' src={Codes} alt='' width={17} height={13} />

                <div className="text-[#0e0e0e] text-[18px] leading-9 tracking-normal py-10 px-[40px]  md:pl-[60px] md:pr-[90px]" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default WisdomCard;