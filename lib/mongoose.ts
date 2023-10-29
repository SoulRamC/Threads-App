import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already conntected to Mongodb");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("connected to Mongodb");
  } catch (error) {
    console.log(`Util.Mongooose:Failed to Connect to Mongodb:\n ${error}`);
  }
};
