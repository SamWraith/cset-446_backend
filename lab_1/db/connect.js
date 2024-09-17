import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } from "../constants.js";

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(MONGO_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
    // try {
    //     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    // } catch (error) {
    //     console.log("MONGODB connection FAILED ", error);
    //     process.exit(1)
    // }
}

export default connectDB;