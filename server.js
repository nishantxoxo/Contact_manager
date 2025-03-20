// console.log("i am in contact manger aaa")
const express = require("express")
const errorHandler = require("./middleware/errorhandler"); //import error handler
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()
connectDb()
const app = express();
const PORT = process.env.PORT || 5000;

// app.get()
app.use(express.json())//this allows server to parse json requests/response
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler) // use error handler

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})