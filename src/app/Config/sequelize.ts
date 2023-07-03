import { Sequelize } from "sequelize";

export function Init_Database() {
    const sq = new Sequelize(
        "Lista_Tarefas",
        "Josemar",
        "1234",
        {
            host: 3306,
            dialect: "mysql"
        }
    
    )
    
    sq.authenticate().then(()=>{
        console.log("Conectado com sucesso")
    }).catch((err)=>{
        console.log("ERRO: "+err);
    })

    return sq;
}
