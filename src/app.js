const express = require("express");

const app = express();

app.use('/test', (req, res)=>{
    res.send("This is Test");
})

app.use('/special', (req,res) => {
    res.send("This is Specially for you <3")
})

app.use('/simply', (req,res) => {
    res.send("simply")
})

app.use((req, res) => {
    res.send("Namaste Anusha")
})

app.listen(1313, () =>{
    console.log("Server is running on 1313")
});