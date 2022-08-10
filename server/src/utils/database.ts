import mongoose from "mongoose";
import logger from "./logger";

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/devBlogs-prototype";

// Function to connect to the mongodb database.
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connected to Database");
  } catch (error) {
    logger.error(error, "Failed to connect to the database. Good bye!");
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  await mongoose.connection.close();

  logger.info("Disconnected from database.");

  return; 
};
