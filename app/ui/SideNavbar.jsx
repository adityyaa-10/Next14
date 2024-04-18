"use client"
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

function SideNavbar() {
    return (
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-slate-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                    <GiHamburgerMenu
                        className="block lg:hidden h-6 w-6"
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <div className="p-6 w-1/2 sm:w-1/3 h-screen bg-white shadow-md z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start item-center">
                        <h1 className="text-md text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                            Side Navigation
                        </h1>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            <Link href='/'>
                                <div className="flex mb-2 justify-start items-center gap-4  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-black " />
                                    <h3 className="text-md text-gray-600 group-hover:text-black font-medium ">
                                        Home
                                    </h3>
                                </div>
                            </Link>
                            <Link href='/editor'>
                                <div className="flex  mb-2 justify-start items-center gap-4  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-black " />
                                    <h3 className="text-md text-gray-800 group-hover:text-black font-medium ">
                                        Editor
                                    </h3>
                                </div>
                            </Link>

                            <div className="flex  mb-2 justify-start items-center gap-4  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <CgProfile className="text-2xl text-gray-600 group-hover:text-black " />
                                <h3 className="text-md text-gray-800 group-hover:text-black font-medium ">
                                    Profile
                                </h3>
                            </div>

                        </div>
                        {/* setting  */}
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            <div className="flex mb-2 justify-start items-center gap-4  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-black " />
                                <h3 className="text-md text-gray-800 group-hover:text-black font-medium ">
                                    Settings
                                </h3>
                            </div>
                            <div className="flex mb-2 justify-start items-center gap-4  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-black " />
                                <h3 className="text-md text-gray-800 group-hover:text-black font-medium ">
                                    More
                                </h3>
                            </div>
                        </div>
                        {/* logout */}
                        <div className=" my-4">
                            <div className="flex mb-2 justify-start items-center gap-4  border border-gray-200  hover:bg-red-50  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-black " />
                                <h3 className="text-md text-gray-800 group-hover:text-black font-medium ">
                                    Logout
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
}

export default SideNavbar;