import { Request, Response } from "express";
import tarefas from "../models/Tarefas";

export default async function DeleteController(req: Request, res: Response) {
    const id = req.params.id;

    const tarefa = await tarefas.findByPk(id);

    if(tarefa){
        tarefas.destroy({where: {id: id}})
            .then(()=>{
                res.json({delete: true})
            }).catch((erro)=>{
                res.json({erro: erro})
            })

    }else{
        res.status(501).json({delete: false, erro: "Tarefa não encontrada"})
    }
}