import { tarefa } from "../interfaces/tarefa";
import { Request, Response } from "express";
import tarefas from "../models/Tarefas";


export default function NovaTarefaController(req: Request, res: Response){
    const novaTarefa: tarefa = {
        nome: req.nome,
        tarefa: req.body.tarefa,
        id_user: req.id_user,
        fim: req.body.fim
    }

    tarefas.create(<any>novaTarefa)
        .then((tar)=>{
            if(tar == null) return res.status(401).json({erro: "Ocorreu um erro ao registrar a tarefa"})

            res.status(201).json(tar);            
        }).catch((erro)=>{
            res.status(501).json(erro);
        })
}