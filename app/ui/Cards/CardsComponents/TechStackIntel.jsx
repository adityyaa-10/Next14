/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
const TechStackIntel = ({ title, company, techstack }) => {
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
          <div className="mx-auto flex h-full min-h-56 cursor-pointer flex-col justify-between rounded-md border bg-white p-4 shadow-sm">
            <div>
              <div className="mt-2 flex justify-between">
                <h2
                  href="#"
                  className="h-20 text-start text-lg font-semibold leading-7 tracking-normal text-gray-800"
                >
                  {title}
                </h2>
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <div className="h-24 overflow-y-auto">
                <p className="leading-7 tracking-normal text-[#0e0e0e]">
                  {typeof techstack === "string" && techstack.length > 0 ? (
                    techstack.split(",").map((tech, index) => (
                      <span key={index} className="inline-block">
                        {tech.trim()}
                        {index !== techstack.split(",").length - 1 &&
                          " •\u00A0"}
                      </span>
                    ))
                  ) : (
                    <span>No technologies specified</span>
                  )}
                </p>
              </div>
            </div>
            <div className="">
              <p
                className="text-base font-medium tracking-normal text-blue-600"
                tabIndex="0"
                role="link"
              >
                {company}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStackIntel;
