import { Update } from "./updateTarefa";

export interface tarefa extends Update {
    nome: string;
    id_user: number;
}
