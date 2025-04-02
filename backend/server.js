//const express = require('express');  old school ^^ 
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

dotenv.config();


const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready123");
});

// console.log(process.env.MONGO_URI); =D insight development

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
});