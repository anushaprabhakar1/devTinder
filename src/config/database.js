// Created DB using mongoose library, install it using npm i mongoose cmd
const mongoose = require("mongoose");

// Connecting to DB using mongoose library
const connectDB = async() => {
    await mongoose.connect("mongodb+srv://anushachethan:Compass2025@nodepractice.nvyki2b.mongodb.net/devTinder")
}

module.exports = {connectDB}