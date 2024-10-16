import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Book from "./model/book.model.js"; // Importing book model
import bookRoute from "./route/book.route.js"; // Importing book route
import userRoute from "./route/user.route.js"; // Importing user route
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Delete all existing records in the books collection
    await Book.deleteMany({}); // This will clear the collection

    // Reading the bookList.json file
    const filePath = path.join(process.cwd(), "data/bookList.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const books = JSON.parse(jsonData);

    // Remove duplicates from the books array
    const uniqueBooks = [
      ...new Map(books.map((item) => [item.id, item])).values(),
    ];

    // Insert unique books into MongoDB
    try {
      await Book.insertMany(uniqueBooks);
      console.log("Books inserted successfully");
    } catch (error) {
      console.log("Error inserting books:", error);
    }

    const totalBooks = await Book.countDocuments();
    console.log("Total books in DB:", totalBooks);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
