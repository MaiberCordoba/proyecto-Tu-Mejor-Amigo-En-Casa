import { Router } from "express";
import { getCategories } from "../Controllers/categoriesControllerMJC.js";
export const routeCategory = Router();

routeCategory.get("/category", getCategories);
