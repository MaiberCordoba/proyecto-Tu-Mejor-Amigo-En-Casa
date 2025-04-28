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

export const PostPetsMJC = async (req, res) =>{
    try {
        const {name,race,category,gender,photo} = req.body
        const consulta = await PrismaMJC.petMJC.create({
            data: {
                name_PetsMJC: name,
                fk_RacesMJC: race,
                fk_CategoriesMJC: category,
                fk_GendersMJC: gender,
                photoMJC: photo
            }

        })
        if (consulta){
            return res.status(201).json({message:"nueva mascota registrada con exito", data:consulta})
        }else{
            return res.status(400).json({message:"no fue posible registrar nueva mascota"})
        
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}

export const patchPetsMJC = async (req,res)=>{
    try {
        const {name,race,category,gender,photo} = req.body
        const consulta = await PrismaMJC.petMJC.update({
            where:{
                id_PetMJC: parseInt(req.params.id)
            },
            data: {
                name_PetsMJC: name,
                fk_RacesMJC: race,
                fk_CategoriesMJC: category,
                fk_GendersMJC: gender,
                photoMJC: photo
            }
        });
        if (consulta) {
            return res.status(200).json({message:"editado con exito",data:consulta})
        }else{
            return res.status(400).json({message:"no fue posible editar"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}

export const deletePetsMJC = async (req,res)=>{
    try {
        const consulta = await PrismaMJC.petMJC.delete({
            where:{
                id_PetMJC: parseInt(req.params.id)
            }
        })
        if (consulta) {
            return res.status(200).json({ message: "mascota eliminada con éxito", data: consulta });
        }
        else{
            return res.status(404).json({ message: "no fue posible eliminar con exito" });
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}

export const getIdPetsMJC = async (req,res)=>{
    try {
        const consulta = await PrismaMJC.petMJC.findFirst({
            where:{
                id_PetMJC: parseInt(req.params.id)
            },
        });
        if (consulta) {
            return res.status(200).json(consulta)
        }else{
            return res.status(400).json({message:"no fue posible encontrar esta mascota"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}