import mongoose from "mongoose";

export const connectionDB = async (DATA_BASE_URL) => {
    await mongoose.connect(DATA_BASE_URL)
        .then(console.log("Connected to database"))
        .catch(err => console.log(err));
}