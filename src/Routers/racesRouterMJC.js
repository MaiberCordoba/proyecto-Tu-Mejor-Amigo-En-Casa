import { Router } from "express";
import { getRacesMJC, patchRacesMJC, PostRacesMJC } from "../Controllers/racesControllerMJC.js";

export const router = Router();

router.get('/races',getRacesMJC);
router.post('/races',PostRacesMJC);
router.patch('/races/:id', patchRacesMJC);