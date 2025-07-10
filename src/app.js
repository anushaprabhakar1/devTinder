const express = require("express");
const {connectDB} = require("./config/database")
const User = require("./models/user") // importing model to do operations in DB

const app = express();

//Express middleware for reading the req in json format
app.use(express.json());

// Creating new instance of user in User model
// Adding user into DB
app.post("/signup", async(req, res) => {
    // data may come from UI or we can check by testing in Postman
    const user = new User(req.body); // Taking data dynamically

    try{
        await user.save();
        res.send("User signed up succesfully!")
    } catch(err) {
        res.status(400).send("User not signed in!")
    }
})

//Fetchind data from DB's user collection
// const user = await User.findById('686f7fb2b5863f5db25874f4');
// const user = await User.findOne({emailId : "anu@p.com"});
// const user = await User.find({emailId : "anu@p.com"});

// Fetching all users in user collection
app.get("/users", async (req, res) => {
    const user = await User.find({});
    if(!user){
        res.status(500).send("Something went wrong!");
    }
    else{
        res.send(user)
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