import { Router } from "express";
import { getGendersMJC } from "../Controllers/gendersController.js";
export const routerGenders = Router();

routerGenders.get('/genders', getGendersMJC)