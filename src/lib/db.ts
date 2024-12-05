import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local",
  );
}

async function dbConnect() {
  return mongoose.connect(MONGODB_URI!).then((mongoose) => mongoose);
}

export default dbConnect;
