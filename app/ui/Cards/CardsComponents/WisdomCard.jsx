/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Codes from "@/app/assets/code.png";
const WisdomCard = ({ content }) => {
  return (
    <div>
      <div className="relative mx-auto h-full w-full max-w-[920px] rounded-md border bg-white shadow-sm">
        <Image
          className="absolute right-10 top-4 rotate-180"
          src={Codes}
          alt=""
          width={17}
          height={13}
        />

        <div
          className="px-[40px] py-10 text-[18px] leading-9 tracking-normal text-[#0e0e0e] md:pl-[60px] md:pr-[90px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default WisdomCard;
