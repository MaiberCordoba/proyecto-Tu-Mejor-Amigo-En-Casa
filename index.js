//importaciones
import express from "express";
import cors from 'cors';
import path from 'path';

import { route } from "./src/Routers/petsRouterMJC.js";
import { router } from "./src/Routers/racesRouterMJC.js";
import { routeCategory } from "./src/Routers/categoriesRouterMJC.js";
import { routerGenders } from "./src/Routers/gendersRouterMJC.js";
import { rutaUser } from "./src/Routers/usersRouterMJC.js";
import { RouterReport } from "./src/Routers/reportesMJC.js";

//inicializaciones
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
//reports
app.use("/api",RouterReport)

app.listen(3000,'192.168.1.104',()=>{
    console.log("3000")
})