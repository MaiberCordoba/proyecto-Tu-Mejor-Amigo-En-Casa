import { Router } from "express";
import { getUsersMJC, LoginMJC, PostUsersMJC } from "../Controllers/usersControllerMJC.js";

export const rutaUser = Router();
    rutaUser.get("/users",getUsersMJC)
    rutaUser.post("/users",PostUsersMJC)
    rutaUser.post("/login",LoginMJC)
