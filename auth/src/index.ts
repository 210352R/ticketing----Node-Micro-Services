import mongoose from "mongoose";

import { app } from "./app";
import { DatabaseConnectionError } from "@eshan_tickets/common";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {});
    console.log("Connected to MongoDb");
  } catch (err) {
    throw new DatabaseConnectionError();
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000 -----");
  });
};

start();
