'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { IoHome } from "react-icons/io5";
import Link from "next/link";



const Register=()=>{
    const router = useRouter()

    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [gender, setGender]=useState('');
    const [password, setPassword]=useState('');

    const [error, setError]=useState(false);
    const [loading, setLoading]=useState(false)



    const submitHandler= async(e)=>{
        console.log(e)
        e.preventDefault();

        // form validation
        let formIsValid= true;

        if(!firstName) {
            setError('Error! All fields are required.')
            formIsValid= false
        }

        else if (!lastName) {
            setError('Error! All fields are required.')
            formIsValid= false
        }

        else if (!email) {
            setError('Error! All fields are required.')
            formIsValid= false
        }

        else if (!gender) {
            setError('Error! All fields are required.')
            formIsValid= false
        }

        else if (!password) {
            setError('Error! All fields are required.')
            formIsValid= false
        }

      else {setError(false)
            setLoading(true)

         try {
            //  const res = await axios.post ('http://localhost:3000/api/register', {firstName, lastName, email, gender, password})
            const res = await axios.post (`${process.env.NEXT_PUBLIC_ENDPOINT}/api/register/`, {firstName, lastName, email, gender, password});


             console.log(res)

             if(res.status===200) {
                 setError(true)
             }  

             else if (res.status==201) {
                 router.replace('/login')
             }
        } 
        
            

        catch (error) {
            setError('Error!, from server')
        }

        setLoading(false)



      }


    };




    return (
        <div className="bg-cover bg-no-repeat bg-cente h-screen " style={{ backgroundImage: "url('/images/login.jpg')" }}>
            <main className=" flex  flex-col m-auto w-fit pt-5 " >
                <h1 className="m-auto text-white py-5 text-3xl font-semibold ">Register here</h1>

                <form onSubmit={submitHandler} className="flex flex-col shadow-lg shadow-orange-400 rounded-lg px-10 py-6 bg-white bg-opacity-5 backdrop-blur-sm relative ">

                    {/* error */}

                    {error && (
                        <div className=" text-base font-semibold mb-2 blink-1">
                            <h1 className="text-red-600 text-sm  bg-white p-2 text-center rounded-full">{error}</h1>
                        </div>
                    )}

                    <Link href={'/'}>
                        <p className="text-white absolute top-3 right-5 hover:text-orange-600"><IoHome /></p>
                    </Link>

                    <label><i className="text-white">First Name</i></label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text"
                    placeholder="enter name  "
                    className="outline-none px-2 py-1 rounded-sm"/>

                    <label className="text-white pt-5"><i >Last Name</i></label>
                    <input onChange={(e)=>setLastName(e.target.value)} type="text"
                    placeholder="enter name  "
                    className="outline-none px-2 py-1 rounded-sm"/>

                    <label className="text-white pt-5"><i>Email</i></label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email"
                    placeholder="enter name   "
                    className="outline-none px-2 py-1 rounded-sm"/>

                    <label className="text-white pt-5 rounded-sm"><i>Gender</i></label>
                    <select onChange={(e)=>setGender(e.target.value)} className="w-full outline-none px-2 py-1">
                        <option className="font-bold px-2 py-1">Select One</option>
                        <option value='M' className="font-bold px-2 py-1">Male</option>
                        <option value='F' className="font-bold px-2 py-1">Female</option>
                        
                    </select>

                    <label className="text-white pt-5"><i>Password</i></label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password"
                    placeholder="enter password  "
                    className="outline-none px-2 py-1 rounded-sm"/>

                    <div className="text-white pt-5 m-auto ">
                        <button type='submit' className="bg-orange-600 px-20 py-2 rounded-sm" >
                            {loading? 'Loading...': 'Register'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )



};

export default Register;

