import { Request, Response } from "express";
import tarefas from "../models/Tarefas";
export default async function ListarController(req: Request, res: Response){
    console.log(req.nome);
    console.log(req.id_user);
   tarefas.findAll({where: {
        id_user: req.id_user
   }})
    .then((result)=>{
        const resultados: any = result | false;

        res.json({result: result})
    }).catch((erro)=>{
        res.json({erro})
    })

    
}
