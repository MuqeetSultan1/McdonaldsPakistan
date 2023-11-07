import express from "express";
import colors from "colors";
import dbConnection from "./config/db.js";
import dotenv from "dotenv";
import router from "./router/burgerRouter.js";
import cors from "cors";

// env configuration
dotenv.config();

const app = express();

// converting data to json
app.use(express.json());  

app.use(cors());

// db connection
dbConnection();

app.use("/uploads", express.static("./uploads"))

// creating end points
app.use("/api/v1/auth", router)

// server setting
const Port = process.env.PORT || 8000;

app.listen(Port, () =>{
    console.log(`server started successfull on port ${Port}`.bgMagenta)
})