import { Router } from "express"
import { deletePetsMJC, getIdPetsMJC, listPetsMJC, patchPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";
import { uploadMJC } from "../middleware/uploadMJC.js";

export const route = Router();

route.get("/pets",listPetsMJC);
route.post('/pets', uploadMJC.single('photo'),PostPetsMJC);
route.patch("/pets/:id", uploadMJC.single('photo'), patchPetsMJC);
route.delete("/pets/:id", deletePetsMJC);
route.get("/pets/:id", getIdPetsMJC);