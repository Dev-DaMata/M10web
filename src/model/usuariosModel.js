import conexao from "../infra/conexao.js";
import moment from "moment";
import { query } from "express";

class usuariosModel{
    static adiciona(usuarios, res){
        const sql = 'INSERT INTO usuarios SET nome = ?, sobrenome = ?, email = ?, telefone = ?, cpf = ?';
        conexao.query(sql,
            [
                usuarios.nome,
                usuarios.sobrenome,
                usuarios.email,
                usuarios.telefone,
                usuarios.cpf
            ],
            (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }


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

    static listaPorId(id, res){
        const sql = `SELECT * FROM usuarios WHERE id_usuario=${id}`
        conexao.query(sql, (erro, resultado) =>{
            const usuario = resultado[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(usuario)
            }
        })
    }
}
export default usuariosModel