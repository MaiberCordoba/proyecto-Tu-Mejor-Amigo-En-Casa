import { PrismaMJC } from "../dbMJC.js";

export const getRacesMJC =  async (req, res) => {
    try {
        const consulta = await PrismaMJC.racesMJC.findMany()
        if (consulta.length>0){
            return res.status(200).json({message:"lista de razas",data:consulta})
        }else{
            return res.status(404).json({message:"razas no encontradas"})
        }
    } catch (error) {
        console.error(error)
    }
}