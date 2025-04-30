import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('connected to db succesfully')

    } catch (error) {
       console.log(error || "error in connecting with database") 
    }
}