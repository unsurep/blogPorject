import mongoose from "mongoose";

export const dbConnect=async()=>{

    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        if(connect) {
            console.log('database connected')
            return connect
        }
    
    } 
    

    
    catch (error) {
        console.log(error.message)
        
    }

}