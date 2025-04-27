import { json } from "express";
import { PrismaMJC } from "../dbMJC.js";

export const listPetsMJC = async (resp, res) =>{
    try {
        const consulta = await PrismaMJC.petMJC.findMany()
        if (consulta.length>0){
            return res.status(200).json({"lista de mascotas":consulta})
        }
        else {
            return res.status(404).json({message:"no se encontraron mascotas"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}

