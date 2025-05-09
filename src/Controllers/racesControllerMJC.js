import { PrismaMJC } from "../dbMJC.js";

export const getRacesMJC =  async (req, res) => {
    try {
        const consultaMJC = await PrismaMJC.racesMJC.findMany()
        if (consultaMJC.length>0){
            return res.status(200).json({message:"lista de razas",data:consultaMJC})
        }else{
            return res.status(404).json({message:"razas no encontradas"})
        }
    } catch (error) {
        console.error(error)
    }
}

export const PostRacesMJC = async (req, res) =>{
    try {
        const {name} = req.body
        const consultaMJC = await PrismaMJC.racesMJC.create({
            data: {
                name_RacesMJC: name,
            }

        })
        if (consultaMJC){
            return res.status(201).json({message:"nueva raza registrada con exito", data:consultaMJC})
        }else{
            return res.status(400).json({message:"no fue posible registrar nueva raza"})
        
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}

export const patchRacesMJC = async (req,res)=>{
    try {
        const {name} = req.body
        const consultaMJC = await PrismaMJC.racesMJC.update({
            where:{
                id_RacesMJC: parseInt(req.params.id)
            },
            data: {
                name_RacesMJC: name,
                
            }
        });
        if (consultaMJC) {
            return res.status(200).json({message:"editado con exito",data:consultaMJC})
        }else{
            return res.status(400).json({message:"no fue posible editar"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}
