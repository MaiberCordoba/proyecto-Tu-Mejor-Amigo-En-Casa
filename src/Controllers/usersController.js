import { PrismaMJC } from "../dbMJC.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { json } from "express";
dotenv.config();

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
        const passwordHash =  await bcrypt.hash(password,10)
        const consulta = await PrismaMJC.userMJC.create({
            data: {
                fullnameMJC: name,
                email: email,
                password: passwordHash,
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

export const LoginMJC = async (req,res) =>{
    try{
        const { email, password } = req.body;
        const consulta = await PrismaMJC.userMJC.findFirst({
            where:{
                email: email,
            },
        })

        if (!consulta){
            return res.status(404).json({message:'usuario no encontrado'})
        }

        const passwordHash = await bcrypt.compare(password,consulta.password)

        if (!passwordHash){
            return res.status(400).json({message:"contraseña incorrecta"});
        }

        
        const token = jwt.sign({
            nombre : consulta.fullnameMJC,
            email : consulta.email,
        },process.env.AUTH_SECRET)
        
        res.status(200).json({message:'login exitoso', data: token})
        

    }
    catch(error){
        console.error(error);
        res.status(500).json({msg:"error"});
    }
}