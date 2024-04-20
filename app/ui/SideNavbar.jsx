/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegCalendarDays, FaRegBuilding, FaRegBell } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { RiSearchLine } from 'react-icons/ri';

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
                <div className="w-1/2 sm:w-1/3 h-screen bg-white shadow-md z-20 fixed top-0 -left-96 lg:left-0 lg:w-72 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start item-center">
                        <div className="px-6 pt-5 flex flex-row">
                            <div className="font-semibold text-left cursor-pointer text-md border-b border-gray-100 pb-4 w-full">
                                <img className="w-24" src="https://images.jumpstart.me/frontend/brand/brand-logo-combined.svg" alt="logo" />
                            </div>
                            <div className="flex">
                                <FaCog className="text-md text-gray-400 mr-1 hidden lg:flex" />
                                <FaRegBell className="text-md text-gray-400 ml-1 hidden lg:flex" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 pt-3 px-1 pb-20 h-full  ">
                        <div className="space-y-3 text-[#0e0e0e] ">
                            <Link href='/' className="flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                                <div className="mr-4 text-2xl">
                                    <IoHome />
                                </div>
                                <span className="text-sm font-normal leading-[130%]">Home</span>
                            </Link>
                            <Link href='/' className="hidden lg:flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                                <div className="mr-4 text-2xl">
                                    <PiSuitcaseSimple />
                                </div>
                                <span className="text-sm font-normal leading-[130%]">Jobs</span>
                            </Link>
                            <Link href='/' className="hidden lg:flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                                <div className="mr-4 text-2xl">
                                    <FaRegCalendarDays />
                                </div>
                                <span className="text-sm font-normal leading-[130%]">Events</span>
                            </Link>
                            <Link href='/' className="hidden lg:flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                                <div className="mr-4 text-2xl">
                                    <FaRegBuilding />
                                </div>
                                <span className="text-sm font-normal leading-[130%]">Companies</span>
                            </Link>
                            <div href='/' className="hidden lg:flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                                <img src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg" className="rounded-full w-6 h-6 mr-4" alt="" />
                                <span className="text-sm font-normal leading-[130%]">Aditya Pandey</span>
                            </div>
                            <div className="text-xs capitalize font-normal leading-[150%] pt-8 px-6 pb-3">
                                <h3>DIRECT MESSAGES</h3>
                            </div>
                            <div className="relative mx-6">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-11 py-2 border border-gray-100 rounded-3xl bg-[#FAFAFA] text-md font-normal "

                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-lg">
                                    <RiSearchLine className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </Disclosure>
        </div>
    );
}

export default SideNavbar;