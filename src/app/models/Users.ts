import { Init_Database } from "../Config/sequelize";
import { DataTypes } from "sequelize";

const sequelize = Init_Database();

const User = sequelize.define("usuarios", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING
    }
})

sequelize.sync().then(()=>{
    console.log("CRIADO COM SUCESSO")
}).catch((erro)=>{
    console.log(erro)
});
export default  User;