import { Router } from "express";
import { getCategories } from "../Controllers/categoriesController.js";
export const routeCategory = Router();

routeCategory.get('/category', getCategories)