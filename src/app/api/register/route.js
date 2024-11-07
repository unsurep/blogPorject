import { dbConnect } from "@/utilities/dbConnect";
import { NextResponse } from "next/server";
import adminModel from "@/models/register";
import bcrypt from "bcryptjs"



export const POST = async (res) => {

     try {  
    // // takes incoming values
     const {firstName, lastName, email, gender, password}= await res.json()
     
     // // call database connection
      await dbConnect()
     // // prevent user from registring with the same email twice
     const adminExists = await adminModel.findOne({email:email})
     if(adminExists) {
         return new NextResponse(JSON.stringify({msg:'admin already exists'}), {status:200});
     }


    // // hashing of password
     const salt = bcrypt.genSaltSync(16)
     const hashedPassword = bcrypt.hashSync(password, salt)

    // // store value of hased password in DB
     const admin = new adminModel({firstName, lastName, email, gender, password:hashedPassword})
        await admin.save()
     if(!admin) {
         return new NextResponse(JSON.stringify({msg:'admin not created'}), {status:400});

     }

     return new NextResponse(JSON.stringify({msg:'admin created'}), {status:201});
        
     } 
    
    
    
     catch (error) {
         console.log(error.message)
         return new NextResponse(JSON.stringify({msg:'server error'}), {status:500});
        
    } 
}



// =============================================================================================================
//  const {firstName, lastName, email, gender, password}=await req.json()

//  await dbConnect()

//  const admin =new adminModel({
//     firstName:firstName,
//     lastName:lastName,
//     email:email,
//     gender:gender,
//     password:password
//  })

//  await admin.save()

//  if(!admin) {
//     return new NextResponse(JSON.stringify({msg:'registration failed'}), {status:400})

//  }


//  return new NextResponse(JSON.stringify({msg:'registration successfull'}), {})






