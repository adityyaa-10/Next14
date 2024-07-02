import Link from "next/link";
const ThirdCard = () => {
  return (
    <Link href="/fullpostpage" target="_blank">
      <div className="rounded-[10px] border border-[#d7d7d7] bg-white py-[25px] pl-[25px]">
        <div className="flex items-center justify-between">
          <h2
            className="text-xl font-medium leading-[27.28px] tracking-tighter text-[#141417]"
            tabIndex="0"
            role="link"
          >
            Freshers need to standout from the crowd...since everyone is doing
            the same thing.
          </h2>
        </div>

        <div className="pt-4">
          <p className="max-w-[811px] text-left text-base font-normal leading-7 tracking-tight text-[#3F3F42]">
            Took interviews in a Tier 1 college... And everyone is doing the
            same thing... Like doing same questions on leetcode, mentioning
            similar kind of projects in their resume...{" "}
          </p>
        </div>

        <div className="pt-4">
          <p className="text-base font-normal leading-7 tracking-tighter text-[#4A94FA]">
            #freshers #skills
          </p>
        </div>

        <div className="mt-4 flex items-center">
          {/* Comment Button */}
          <div className="flex items-center rounded border border-[#D7D7D7] px-2 py-1 text-sm font-normal text-[#3F3F42]">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="#707680">
              <path
                fillRule="evenodd"
                d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V4z"
                clipRule="evenodd"
              />
            </svg>
            <span>12</span>
          </div>
          <div className="ml-3 rounded border border-[#D7D7D7] px-2 py-1 text-sm font-medium text-[#707680]">
            December, 23
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ThirdCard;
