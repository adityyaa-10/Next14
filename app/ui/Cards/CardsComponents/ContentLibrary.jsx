/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const ContentLibrary = ({ url, imgUrl, title, author, description }) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex flex-col rounded-[10px] border border-[#d7d7d7] bg-white px-[25px] py-[25px] sm:flex-row">
        <div className="mb-4 inline-flex items-center justify-center sm:mb-0 sm:mr-8">
          <img
            width={200}
            height={112}
            className="h-[112.5px] w-[200px] rounded-[10px]"
            src={imgUrl}
            alt=""
          />
        </div>
        <div>
          <h2 className="title-font mb-2 line-clamp-1 max-w-[690px] text-lg font-medium uppercase text-[#141417]">
            {title}
          </h2>
          <h3 className="inline-flex items-center text-base font-semibold leading-[21.86px] text-[#3F3F42]">
            {author}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-[670px] text-base leading-relaxed text-[#24201fce]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ContentLibrary;
