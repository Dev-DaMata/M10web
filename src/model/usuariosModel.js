import conexao from "../infra/conexao.js";
import moment from "moment";
import { query } from "express";

class usuariosModel{
    static lista(res){
        const sql = 'SELECT * FROM usuarios'
        conexao.query(sql, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }
}
export default usuariosModel