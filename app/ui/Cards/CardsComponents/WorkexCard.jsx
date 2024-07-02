/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
const WorkexCard = ({ title, company, yoe }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full ${isLoading ? "animate-pulse" : ""}`}>
      {isLoading ? (
        <>
          <div className="mx-auto flex h-full animate-pulse cursor-pointer flex-col justify-between rounded-[4px] border bg-white p-4 shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-sm bg-gray-200 px-2 py-1 text-xs font-semibold leading-4"></span>
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200"></div>
              </div>
              <div className="mt-2">
                <h2 className="h-5 animate-pulse rounded bg-gray-200 text-start text-lg font-semibold leading-6"></h2>
                <p className="mt-2 h-3 animate-pulse rounded bg-gray-200 leading-7 tracking-normal text-gray-200"></p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="mr-3 h-10 w-10 animate-pulse rounded-xl bg-gray-200"></div>
              <span className="h-3 animate-pulse cursor-pointer rounded bg-gray-200 font-medium tracking-normal text-gray-200"></span>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="mx-auto grid h-full w-full grid-cols-4 items-center gap-4 rounded-md border bg-white px-2 py-3 shadow-sm">
            <div className="col-span-2">
              <div className="overflow-y-auto">
                <p className="ml-4 leading-7 tracking-normal text-[#0e0e0e]">
                  {title}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <p
                className="ml-0 text-base font-medium tracking-normal text-blue-600 lg:ml-24"
                tabindex="0"
                role="link"
              >
                {company}
              </p>
            </div>
            <div className="col-span-1">
              <h2
                href="#"
                className="mr-6 text-right text-lg font-semibold leading-7 tracking-normal text-gray-800"
              >
                {yoe}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkexCard;
