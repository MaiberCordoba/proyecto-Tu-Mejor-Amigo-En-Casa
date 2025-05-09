//importaciones
import express from "express";
import cors from 'cors';
import path from 'path';

import { route } from "./src/Routers/petsRouterMJC.js";
import { router } from "./src/Routers/racesRouterMJC.js";
import { routeCategory } from "./src/Routers/categoriesRouterMJC.js";
import { routerGenders } from "./src/Routers/gendersRouterMJC.js";
import { rutaUser } from "./src/Routers/usersRouterMJC.js";

//inicializaciones
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Esto hace accesibles las imágenes desde http://localhost:3000/pet-uploads/filename.jpg
app.use("/pets-photos", express.static(path.join("public", "pets-photos")));

//routes

//pets
app.use("/api",route);
//races
app.use("/api",router);
//categories
app.use("/api",routeCategory)
//genders
app.use("/api",routerGenders)
//users
app.use("/api",rutaUser)

app.listen(3000,()=>{
    console.log("3000")
})