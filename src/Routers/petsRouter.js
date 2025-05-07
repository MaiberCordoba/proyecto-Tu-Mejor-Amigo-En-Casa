import { Router } from "express"
import { deletePetsMJC, getIdPetsMJC, listPetsMJC, patchPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";
import { upload } from "../middleware/upload.js";

export const route = Router();

route.get("/pets",listPetsMJC);
route.post('/pets', upload.single('photo'),PostPetsMJC);
route.patch("/pets/:id", upload.single('photo'), patchPetsMJC);
route.delete("/pets/:id", deletePetsMJC);
route.get("/pets/:id", getIdPetsMJC);