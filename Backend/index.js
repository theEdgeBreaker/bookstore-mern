import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Book from "./model/book.model.js"; // Importing book model
import bookRoute from "./route/book.route.js"; // Importing routes

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Reading the bookList.json file
    const filePath = path.join(process.cwd(), "data/bookList.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const books = JSON.parse(jsonData);

    // Insert the books into MongoDB
    try {
      await Book.insertMany(books);
      console.log("Books inserted successfully");
    } catch (error) {
      console.log("Error inserting books:", error);
    }

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });

// Defining routes
app.use("/book", bookRoute);
