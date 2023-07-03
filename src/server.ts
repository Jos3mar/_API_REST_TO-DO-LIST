import { app, express } from "./app/Config/express";
import Login from "./app/Routas/Login";
import Tarefas from "./app/Routas/Tarefas";
import { Init_Database } from "./app/Config/sequelize";


const sequelize = Init_Database();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(Login);
app.use(Tarefas);

app.listen(8000, ()=> console.log('Servidor rodando na porta 8000'))