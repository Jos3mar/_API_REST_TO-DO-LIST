import { Update } from "../interfaces/updateTarefa";
import { Request, Response } from "express";
import tarefas from "../models/Tarefas";


export default async function UpdateController(req: Request, res: Response){
    const updateTarefa: Update = {
        tarefa: req.body.tarefa,
        fim: req.body.fim
    }

    const id = req.params.id;
    const result = await tarefas.findByPk(id);

    if(result){
    tarefas.update(updateTarefa, {where: {id: id}})
        .then((r)=>{
            res.json({updated: r, update: false});
        }).catch((erro)=>{
            res.json({update: false, erro: erro})
        })
    }else{
        res.json({update: false, erro: "Tarefa não encontrada"})
    }
}