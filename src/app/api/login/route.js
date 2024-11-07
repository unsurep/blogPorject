import adminModel from "@/models/register";
import { NextResponse } from "next/server";
import { dbConnect } from "@/utilities/dbConnect";
import bcrypt from "bcryptjs"

export const POST = async (res)=>{
    try {
        // taking incoming data
        const {email, password} =await res.json()
        // call database
        await dbConnect()

        // checking data base if incoming data matches
        const user= await adminModel.findOne({email:email})
        if(!user) {
            return new NextResponse(JSON.stringify({msg:'invalid credential'}), {status:401});
        }

        // getting hashed password stored in DB
        const hashedPassword= user.password
        // verify that hashed password matches
        const passwordTrue = bcrypt.compareSync(password, hashedPassword)
        if(!passwordTrue){
        return new NextResponse(JSON.stringify({msg:'invalid credential'}), {status:401});
        }
        return new NextResponse(JSON.stringify({msg:'admin loggedin'}), {status:200}); 
    } 
    
    catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:'server error'}), {status:500});
        
    }

}
