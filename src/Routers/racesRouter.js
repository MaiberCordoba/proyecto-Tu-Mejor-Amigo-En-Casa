import { Router } from "express";
import { getRacesMJC } from "../Controllers/racesControllerMJC.js   ";

export const router = Router();

router.get('/races', getRacesMJC);