const express = require("express"); //importing express

const app = express(); //creating new instance of express to use further

//GET Method API
app.get("/user", (req, res) => {
    res.send({
        firstName: "Anusha",
        lastName: "Prabhakar",
        age: "25",
        gender: "F"
    })
})

//Post API Method
app.post("/user", (req, res) => {
    res.send("User Data Saved Successfully!");
})

//Put API Method
app.put("/user", (req, res) => {
    res.send("User Data Updated Successfully!");
})

//Delete API Method
app.delete("/user", (req, res) => {
    res.send("User Data Deleted Successfully!");
})

//Default API, which will be GET method
app.use('/test', (req, res)=>{
    res.send("This is Test");
})

//My server listening to outside requests
app.listen(1313, () =>{
    console.log("Server is running on 1313")
});