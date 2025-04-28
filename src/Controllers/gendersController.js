import { PrismaMJC } from "../dbMJC.js";

export const getGendersMJC = async (req, res) =>{
    try {
        const consulta = await PrismaMJC.gendersMJC.findMany()
        if(consulta.length>0){
            return res.status(200).json({message:"lista de generos", data:consulta})
        }else{
            return res.status(404).json({message:"lista de generos no encontrada"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}