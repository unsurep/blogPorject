'use client'
import React from "react";
import Link from "next/link";

const Nav=()=>{
    return (
        <>
            <nav className="hidden md:flex px-[15rem] py-[1rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <ul className="flex gap-4 text-base">
                    <li className="hover:font-bold cursor-pointer">Home Example</li>
                    <li className="hover:font-bold cursor-pointer">Post</li>
                    <li className="hover:font-bold cursor-pointer">About Me</li>
                    <li className="hover:font-bold cursor-pointer">Contact Me</li>
                    <li className="hover:font-bold cursor-pointer">Purchase!</li>
                </ul>

                <div className="ml-auto flex gap-4 text-base">
                    <Link href={'/register'}>
                        <p className="hover:font-bold cursor-pointer">Register</p>
                    </Link>
                    
                    <Link href={'/login'}>
                        <p className="hover:font-bold cursor-pointer">Login</p>
                    </Link>
                </div>
            </nav>

            {/* phone screen */}
            <nav className="block md:hidden p-[1rem] ">
                <div className=" flex justify-end">
                    <h1>Menu</h1>
                </div>
            </nav>
        </>
    )



};

export default Nav;