const express = require("express");
const {connectDB} = require("./config/database")
const User = require("./models/user") // importing model to do operations in DB

const app = express();

// Creating new instance of user in User model
// Adding user into DB
app.post("/signup", async(req, res) => {
    const user = new User({
        firstName : "Chethan",
        lastName : "Kumar",
        emailId : "Chethu@anu.com",
        password : "chethu@123"
    })

    try{
        await user.save();
    res.send("User signed up successfully!");
    }catch(err) {
        res.status(400).send("Failed sign up the user!")
    }
})

//Once after connecting to DB, it'll send the promise so we are handling here using then
//Always listen only after connecting to DB
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