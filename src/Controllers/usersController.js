import { PrismaMJC } from "../dbMJC.js";

export const getUsersMJC = async (req, res) =>{
    try {
        const consulta = await PrismaMJC.userMJC.findMany()
        if(consulta.length>0){
            return res.status(200).json({message:"lista de usuarios", data:consulta})
        }else{
            return res.status(404).json({message:"lista no hay usuarios registrados"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}

export const PostUsersMJC = async (req, res) =>{
    try {
        const {name,email,password} = req.body
        const consulta = await PrismaMJC.userMJC.create({
            data: {
                fullnameMJC: name,
                email: email,
                password: password,
            }

        })
        if (consulta){
            return res.status(201).json({message:"nuevo ususario registrado con exito", data:consulta})
        }else{
            return res.status(400).json({message:"no fue posible registrar nuevo usuario"})
        
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"error"})
    }
}
