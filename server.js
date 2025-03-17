// console.log("i am in contact manger aaa")
const express = require("express")

const dotenv = require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 5000;

// app.get()
app.use("/api/contacts", require("./routes/contactRoutes"))


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})