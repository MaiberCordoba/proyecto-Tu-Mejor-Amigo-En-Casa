//importaciones
import express from "express";

import { route } from "./src/Routers/petsRouter.js";
//inicializaciones
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes

//pets
app.use("/api",route);


app.listen(3000,()=>{
    console.log("3000")
})