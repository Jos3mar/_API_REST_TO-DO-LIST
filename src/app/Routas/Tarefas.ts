import Auth from "../middleware/auth";
import { express } from "../Config/express";
import ListarController from "../Controller/ListarController";
import NovaTarefaController from "../Controller/NovaTarefaController";
import UpdateController from "../Controller/UpdateContrller";
import DeleteController from "../Controller/DeleteController";

const Tarefas = express.Router()

Tarefas.get('/', Auth, ListarController);
Tarefas.post('/nova', Auth, NovaTarefaController);
Tarefas.put('/update/:id', Auth, UpdateController);
Tarefas.delete('/delete/:id', Auth, DeleteController)
export default Tarefas;