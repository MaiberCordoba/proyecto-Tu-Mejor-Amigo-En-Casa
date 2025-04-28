//importaciones
import express from "express";
import cors from 'cors';

import { route } from "./src/Routers/petsRouter.js";
//inicializaciones
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes

//pets
app.use("/api",route);


app.listen(3000,()=>{
    console.log("3000")
})