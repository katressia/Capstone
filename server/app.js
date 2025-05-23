import chakras from "./controllers/chakras.js";
// 'Import' the Express module instead of http
import express from "express";

import dotenv from "dotenv";
// Load environment variables from .env file
import mongoose from "mongoose";
dotenv.config();

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

// Initialize the Express application
const app = express();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

// CORS Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

app.use("/chakras", chakras);
// Tell the Express app to start listening
// Let the humans know I am running and listening on 1234
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
