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

    static altera(id, usuario, res){
        console.log(id);
        console.log(usuario);
        const sql = `UPDATE usuarios SET nome = ?, sobrenome = ?, email = ?, telefone = ?, cpf = ? WHERE id_usuario=${id}`
        console.log(sql);
        console.log(usuario + "linha 50");
        conexao.query(sql, [usuario.nome, usuario.sobrenome, usuario.email, usuario.telefone, usuario.cpf], (erro, usuario)=>{
            console.log(usuario);
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({
                    "msg": "O usuario foi alterado com sucesso!"
                })
            }
        } )
    }

    static deleta(id, res){
        const sql = 'DELETE FROM usuarios WHERE id_usuario=?'

        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(`O usuario com o id ${id}, foi deletado com sucesso!`)
            }
        })
    }
}
export default usuariosModel