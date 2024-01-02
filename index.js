import express from "express";
import { sendMail } from "./controllers/sendEmail.js";


const app = express();
const port = 8000;

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.get("/sendemail", sendMail)

app.listen(port,()=>{
console.log("server running on " + port)
})