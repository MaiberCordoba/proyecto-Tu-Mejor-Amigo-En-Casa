import { Router } from "express"
import { listPetsMJC } from "../Controllers/petsControllerMJC.js";

export const route = Router();

route.get("/pets",listPetsMJC);
