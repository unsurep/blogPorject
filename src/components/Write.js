'use client'

import { Input } from "postcss";
import React, { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Write=()=>{

    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('');
    const[category, setCategory]=useState('');
    const [image, setImage]=useState('');
    const [post, setPost]=useState('');


    const [error, setError]=useState(false);
    const [loading, setLoading]=useState(false);


    const submitHandler=async(e)=>{
        e.preventDefault()

        // handling errors

        if(!title || !author || !category || !image || !post) {
            setError('Error! All fields are required.');
            return;
        }

        else{
            setLoading(true)
        }






    }


    return (
        <div className="bg-cover bg-no-repeat bg-cente h-screen " style={{ backgroundImage: "url('/images/login.jpg')" }}>
            <h1 className="flex justify-center pt-3 text-3xl pb-2 text-white font-semibold">Create a Blog Post</h1>
            <div className="flex justify-center">
            <form onSubmit={submitHandler} className="flex flex-col justify-center bg-white rounded-sm px-5 py-10 bg-opacity-10 backdrop-blur-sm shadow-lg shadow-orange-400">

                {/* error  */}
                {error && (
                    <div className="  font-semibold mb-2 blink-1">
                        <h1 className="text-red-600 text-[12px]  bg-white p-2 text-center rounded-full">{error}</h1>
                    </div>
                )}

                    <Link href={'/'}>
                        <p className="text-white absolute top-3 right-5 hover:text-orange-600"><IoHome /></p>
                    </Link>
                

                <div className="flex flex-col ">
                    <label className="text-white"><i>Title</i></label>
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" 
                    placeholder="enter title" 
                    className=" outline-none border border-black px-2 py-1 rounded-sm"/>
                </div>

                <div className="flex flex-col pt-3">
                    <label className="text-white"><i>Author</i></label>
                    <input onChange={(e)=>setAuthor(e.target.value)} type="text"
                    placeholder="enter name" 
                    className=" outline-none border border-black px-2 py-1 rounded-sm"/>
                </div>

                <div className="flex flex-col pt-3">
                    <label className="text-white"><i>Category</i></label>
                    <select onChange={(e)=>setCategory(e.target.value)} className=" outline-none border border-black px-2 py-1 rounded-sm">
                        <option>Select category</option>
                        <option>Sport</option>
                        <option>Fashion</option>
                        <option>Lifestyle</option>
                        <option>Education</option>
                    </select>
                </div>

                <div className="flex flex-col pt-3">
                    <label className="text-white"><i>Upload Image</i></label>
                    <input onChange={(e)=>setImage(e.target.value)} type="file"
                    multiple
                    accept=".jpg, .pdf, .mp4, .txt, .docx, .mp3, .wave, .jpeg, .png"
                    className="text-white"/>
                </div>

                <div className="flex flex-col pt-3">
                    <label className="text-white "><i>Post</i></label>
                    <textarea
                    id="comments"
                    name="comments"
                    onChange={(e)=>setPost(e.target.value)}
                    className="px-2 py-1 rounded-sm outline-none border border-black "
                    placeholder="enter message here"
                    rows="3" cols="30"                    
                    ></textarea>
                </div>

                <div className="bg-orange-600 text-center mt-3">
                    <button className="py-2 rounded-sm text-white" disabled={loading}>

                        {loading? 'Loding...' : 'Onclick to Submit'}
                    </button>
                </div>

            </form>

            </div>
            
        </div>
    )


};

export default Write;