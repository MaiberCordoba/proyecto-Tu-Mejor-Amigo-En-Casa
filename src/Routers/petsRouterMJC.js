import { Router } from "express"
import { deletePetsMJC, getIdPetsMJC, listPetsMJC, patchPetsMJC, PostPetsMJC } from "../Controllers/petsControllerMJC.js";
import { uploadMJC } from "../middleware/uploadMJC.js";
import verifyJWT from "../middleware/verifyJWTMJC.js";

export const route = Router();

route.get("/pets",verifyJWT,listPetsMJC);
route.post('/pets', uploadMJC.single('photo'), verifyJWT,PostPetsMJC);
route.patch("/pets/:id", uploadMJC.single('photo'),verifyJWT, patchPetsMJC);
route.delete("/pets/:id", verifyJWT, deletePetsMJC);
route.get("/pets/:id",verifyJWT, getIdPetsMJC);