//importaciones
import express from "express";
import cors from 'cors';

import { route } from "./src/Routers/petsRouter.js";
import { router } from "./src/Routers/racesRouter.js";
import { routeCategory } from "./src/Routers/categoriesRouter.js";
//inicializaciones
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes

//pets
app.use("/api",route);
//races
app.use("/api",router);
//categories
app.use("/api",routeCategory)


app.listen(3000,()=>{
    console.log("3000")
})