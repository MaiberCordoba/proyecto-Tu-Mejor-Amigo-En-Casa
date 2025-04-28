import { Router } from "express"
import { deletePetsMJC, getIdPetsMJC, listPetsMJC, patchPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";

export const route = Router();

route.get("/pets",listPetsMJC);
route.post("/pets",PostPetsMJC);
route.patch("/pets/:id",patchPetsMJC);
route.delete("/pets/:id", deletePetsMJC);
route.get("/pets/:id", getIdPetsMJC);