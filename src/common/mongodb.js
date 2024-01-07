import mongoose from "mongoose"
const DB_URL = 'mongodb://localhost:27017/project_tracker';


export const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}