const express = require("express");
const {adminAuth, userAuth} = require("./Middlewares/auth");

const app = express();

//Middlewares for authorization
app.use('/admin', adminAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send([
        data = {
            "firstName" : "Anusha",
            "age" : "25"
        },
        {message : "Success"}
    ])
})

app.get("/user/data", userAuth, 
    (req, res) => {
        res.send("User data fetched")
    }
)

app.listen(1313,
    console.log("Server running on 1313")
)