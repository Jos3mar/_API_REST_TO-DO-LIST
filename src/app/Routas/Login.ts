import { express } from "../Config/express";
import CadastrarController from "../Controller/CadastrarController";
import LoginController from "../Controller/LoginController";


const Login = express.Router();


Login.post('/cadastrar', CadastrarController)
Login.post('/login', LoginController);

export default Login;