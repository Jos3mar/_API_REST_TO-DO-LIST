import { Request, Response } from "express";
import { users } from "../interfaces/uses";
import User from "../models/Users";

export default async function CadastrarController(req: Request, res: Response){

    const user: users = {
        nome: req.body.nome,
        senha: req.body.senha
    }

    User.create(<any>user)
        .then((u)=>{
            res.json(u);
        }).catch((erro)=>{
            res.json(erro);
        })

    

    
}
