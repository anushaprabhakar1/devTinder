Creating basic node
Step 1 : Create a folder with your App name.
Step 2 : Create "src" folder inside it.
Step 3 : Create app.js file inside "src" folder, app.js will be our mail file for executing.
Step 4 : Open terminal and do npm init to create "package.json".
Step 5 : Install necessary npm packages.
Step 6 : Create server using express inside app.js.
          const express = require("express");
          const {connectDB} = require("./config/database")
          const app = express();
          app.use("/", router handler function)

          connectDB().then(
              () => {
              console.log("DB connected succesfully!");
              app.listen(1313, () => {
              console.log("Server running on 1313")
              }
             )
          }
        ).catch((err) => {
             console.error("DB not connected!")
            })

Step 7 : Connect to DB using mongoose.
Step 8 : Create "config" folder in "src" and "database.js" inside "config". 
          // Created DB using mongoose library, install it using npm i mongoose cmd
          const mongoose = require("mongoose");
          // Connecting to DB using mongoose library
          const connectDB = async() => {
          await mongoose.connect("mongodb+srv://anushachethan:Compass2025@nodepractice.nvyki2b.mongodb.net/devTinder")
          }

          module.exports = {connectDB}

Step 9 : Create schema for the Collection.
Step 10: Create "models" fodler inside "src" and "user.js" inside "models"(user.js for user collection).
Step 11: Create model for that schema and export, so import in "app.js".
Step 12 : Open terminal and run node app.js.

