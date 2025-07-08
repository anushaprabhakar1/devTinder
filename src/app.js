const express = require("express");  // importing express from node

const app = express();  // creating new instance for express

app.use("/user", (req, res, next) =>{
    // Route handler 1
    console.log("Route Handler 1");
    // res.send("Route Handler Response1")
    next();
},
(req, res, next) => {
    // Route handler 2
    console.log("Route Handler 2");
    // res.send("Route Handler Response2");
    next();
},
(req, res, next) => {
    // Route handler 3
    console.log("Route Handler 3");
    // res.send("Route Handler Response3");
    next();
},
(req, res, next) => {
    // Route handler 4
    console.log("Route Handler 4");
    // res.send("Route Handler Response4");
    next();
},
(req, res) => {
    // Route handler 5
    console.log("Route Handler 5");
    res.send("Route Handler Response5");
}
);

app.listen(1313,
    console.log("Server running on 1313...")
)