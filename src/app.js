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
        res.status(400).send("SIGNUP FAILED:" + err.message)
    }
})

// Fetching all users in User collection
app.get("/users", async (req, res) => {
    try{
        const users = await User.find({})
        if (users.length === 0){
            res.send("Collection is empty!");
        }
        else {
            res.send(users);
        }
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})

// For fetching user by mailId
app.get("/user", async(req, res) => {
    const userEmailId = req.body.emailId;
    try{
        const user = await User.findOne({emailId : userEmailId});
        if(!user){
            res.status(404).send("User not found")
        }
        else {
            res.send(user);
        }
    } catch(err) {
        res.status(404).send("Something went wrong!");
    }
})

//Edit a user data by Id
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;

    try{
        const user = await User.findByIdAndUpdate({_id : userId}, data, 
            {
                returnDocument : "after",
                runValidators : true
            }
        );
        if(user){
            res.send("User updated succesfully!");
        }
        else{
            res.status(404).send("User not found!")
        }
    } catch (err) {
        res.status(400).send("UPDATE FAILED:" + err.message)
    }
})

//Delete user by Id
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;

    try {
        const user = await User.findByIdAndDelete(userId);
        if(user){
            res.send("User deleted successfully!")
        }
        else {
            res.status(404).send("User not found")
        }
    } catch (err) {
        res.status(400).send("Something went wrong")
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