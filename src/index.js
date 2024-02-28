import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv  from "dotenv";

dotenv.config({path:'./env'})
const app = express();

connectDB()
// (async ()=>{
//     try {
//         await mongoose.connect(`process.env.${MONGO_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Unable to connect db",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()