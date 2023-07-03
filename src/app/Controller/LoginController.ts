import { Request, Response } from "express";
import { users } from "../interfaces/uses";
import User from "../models/Users";
import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import SECRET_KEY from "../Config/token";

export default async function LoginController(req: Request, res: Response){

    const user: users = {
        nome: req.body.nome,
        senha: req.body.senha
    }

    User.findOne({where: {
        nome: req.body.nome,
        senha: req.body.senha
    }})
        .then((result)=>{
            if(result) {
                const tk = sign({user: result.nome, id: result.id}, SECRET_KEY  , { expiresIn: '2000s'})
                res.json({
                    result: result,
                    token: tk,
                })
            }else{
                res.json({
                    result: false
                })
            }
        })
        .catch((erro)=>{
            res.json(erro)
        })
    

    
}
