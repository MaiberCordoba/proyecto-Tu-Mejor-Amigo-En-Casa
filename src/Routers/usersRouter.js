import { Router } from "express";
import { getUsersMJC, PostUsersMJC } from "../Controllers/usersController.js";

export const rutaUser = Router();
    rutaUser.get("/users",getUsersMJC)
    rutaUser.post("/users",PostUsersMJC)
