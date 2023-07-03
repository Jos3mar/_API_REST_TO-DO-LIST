import { Init_Database } from "../Config/sequelize";
import { DataTypes } from "sequelize";

const sequelize = Init_Database();

const tarefas = sequelize.define("Tarefas", {
    tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fim: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

sequelize.sync().then(()=>{
    console.log("CRIADO COM SUCESSO")
}).catch((erro)=>{
    console.log(erro)
});
export default  tarefas;