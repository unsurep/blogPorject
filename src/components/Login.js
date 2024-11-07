'use client'

import React, { useState } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoHome } from "react-icons/io5";


const Login=()=>{
    const router=useRouter()
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [error, setError]=useState(false);
    const [loading, setLoading]=useState(false);

    

    const submitHandler= async (e)=>{
        console.log(e);
        e.preventDefault();

        // form validatio

      
        if ( !email || !password) {
            setError('Error! All fields are required.');
            return;
        }

         {
            setLoading(true);

            // calling API
            try {
                const res = await axios.post ("http://localhost:3000/api/login", {email, password});
                if(res.status===401){
                    setError(true)
                }

                else if(res.status===200) {
                    router.push('/write')  
                }
                console.log(res);
            } 
            
            catch (error) {
                setError('Error!, Incorrect credentials')
            }
            setLoading(false);
        }





    }














    return(
        <div className="bg-cover bg-no-repeat bg-cente h-screen pt-[1.5rem] px-10 " style={{ backgroundImage: "url('/images/login.jpg')" }}>
            <div className="flex m-auto items-center justify-center gap-20 bg-opacity-10 backdrop-blur-sm bg-white     ">
                <div className="relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] my-[4rem] px-6 rounded-lg py-16 shadow-orange-400  ">
                    {/* error msg */}

                    {error && (
                        <div className=" text-base font-semibold mb-2 blink-1">
                            <h1 className="text-red-600 text-sm  bg-white p-4 text-center rounded-full">{error}</h1>
                        </div>
                    )}

                    <Link href={'/'}>
                        <p className="text-white absolute top-3 right-5 hover:text-orange-600"><IoHome /></p>
                    </Link>


                    <h1 className="text-3xl text-white font-semibold ">Login</h1>
                    <p className="text-[12px] text-neutral-400">Don't have an account yet? 
                        <Link href={'/register'}>
                            <span className="underline cursor-pointer">Sign Up</span>
                        </Link>
                    </p>

                    <form onSubmit={submitHandler} className="flex flex-col pt-5">
                        <label className="text-white"><i>Email</i></label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text"
                        placeholder="enter email"
                        className="outline-none px-2 py-1 rounded-sm"/>

                        <label className="pt-5 text-white"><i>Password</i></label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password"
                        placeholder="enter password"
                        className="outline-none px-2 py-1 rounded-sm"/>

                        <div className="mt-5 w-full  text-center ">
                            <button type="submit" className="text-white px-20 py-2 rounded-sm bg-orange-600 " disabled={loading}>
                            {loading ? 'Loading...': 'Login'}
                            </button>
                            
                        </div>
                    </form>

                </div>









                <div className="mt-[5rem]">
                    <img src="/images/webite.webp" width={700} height={700} alt="image" className=""/>
                </div>
            </div>
            
        </div>
    )



};

export default Login;