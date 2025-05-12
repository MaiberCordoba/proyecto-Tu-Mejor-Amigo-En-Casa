import { Router } from "express";
import { listAdoptedPetsMJC, listPetsByStatusMJC } from "../Controllers/reportesMJC.js";

export const RouterReport = Router();

RouterReport.get('/report/1', listAdoptedPetsMJC)
RouterReport.get('/report/2',listPetsByStatusMJC)