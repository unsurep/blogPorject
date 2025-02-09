'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav=()=>{
    const [dropDown, setDropDown]=useState(false);

    const toggleDropDown=()=>{
        setDropDown(!dropDown)
    }



    return (
        <>
            <nav className="flex py-[1rem] px-[1rem] md:px-[15rem] items-center justify-between  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] fixed z-50 w-full bg-white bg-opacity-45 backdrop-blur-xl ">
                <ul className="flex gap-2 md:gap-5 text-xs md:text-base">
                    <li className="hover:font-bold cursor-pointer">Home</li>
                    <li className="hover:font-bold cursor-pointer">Post</li>
                    <li className="hover:font-bold cursor-pointer">About</li>
                    <li className="hover:font-bold cursor-pointer">Contact</li>
                    <li className="hover:font-bold cursor-pointer">Purchase!</li>
                </ul>

                <div className="flex gap-4 text-sm">

                    <div className=" cursor-pointer flex items-center ">
                        {/* medium screen above */}
                        <div className="hidden md:flex">
                            <Image src='/user.svg' alt="svg_image" width={40} height={40} className="animate-pulse" />
                        </div>




                        {/* small screen */}
                        <div onClick={toggleDropDown} className="md:hidden flex items-center">
                            <Image src='/user.svg' alt="svg_image" width={30} height={30} className="animate-pulse" />
                        </div>

                        {
                            dropDown===true ? (<ul className="absolute top-16 right-6">
                                <li>Register</li>
                                <li>Login</li>
                            </ul>)
                            :
                            (<div></div>)
                        }

                    

                    
                    </div>


                    {/* <Link href={'/register'}>
                        <p className="hover:font-bold cursor-pointer">Register</p>
                    </Link>
                    
                    <Link href={'/login'}>
                        <p className="hover:font-bold cursor-pointer">Login</p>
                    </Link> */}
                </div>
            </nav>

            {/* phone screen */}
            <nav className="block md:hidden p-[1rem] ">
                <div className=" flex justify-end">
                    {/* <h1>Menu</h1> */}
                </div>
            </nav>
        </>
    )



};

export default Nav;