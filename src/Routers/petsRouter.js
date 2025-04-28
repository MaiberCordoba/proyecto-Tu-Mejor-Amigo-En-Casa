import { Router } from "express"
import { listPetsMJC, patchPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";

export const route = Router();

route.get("/pets",listPetsMJC);
route.post("/pets",PostPetsMJC);
route.patch("/pets/:id",patchPetsMJC);