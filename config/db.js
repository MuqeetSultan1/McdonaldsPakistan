import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_Local)
        console.log(`database connected successfully on host ${mongoose.connection.host}`.bgGreen)
    } catch (error) {
        console.log('error in db connection'.bgRed)
    }
}

export default dbConnection;