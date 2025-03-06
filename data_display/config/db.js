import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const connectToDB = async () => {

    try {
        const MONGO_URI = process.env.MONGO_URI;
        mongoose.connect(MONGO_URI);
        mongoose.set('strictQuery', true);
    } catch (error) {
        console.error("error in connection to db");
    }
}