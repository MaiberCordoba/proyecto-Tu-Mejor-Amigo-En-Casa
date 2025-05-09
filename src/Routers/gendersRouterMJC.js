import { Router } from "express";
import { getGendersMJC } from "../Controllers/gendersControllerMJC.js";
export const routerGenders = Router();

routerGenders.get('/genders', getGendersMJC)