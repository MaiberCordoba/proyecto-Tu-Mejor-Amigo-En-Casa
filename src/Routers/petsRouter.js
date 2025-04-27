import { Router } from "express"
import { listPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";

export const route = Router();

route.get("/pets",listPetsMJC);
route.post("/pets",PostPetsMJC);