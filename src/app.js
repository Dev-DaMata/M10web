import express from "express";
import usuariosController from "./controllers/usuariosController.js";
import enderecoController from "./controllers/enderecoController.js";
import conexao from "./infra/conexao.js";
import Tabelas from "./infra/tabelas.js";
import * as dotenv from "dotenv";

const tabelas = new Tabelas()
dotenv.config()
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log("A conexão com o banco de dados mysql foi feita com sucesso!");
    
        tabelas.init(conexao)

        usuariosController(app)
        enderecoController(app)
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`);
        })
    }
})

